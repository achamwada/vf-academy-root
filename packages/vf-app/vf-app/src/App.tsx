import { useEffect, useRef, useState } from 'react';
import { useAssembly } from './hooks/useAssembly';

import { Instance } from '@vf/assembly/types';
import ErrorBlock, { Level } from './components/ErrorBlock';
import { AppContainer } from './styles';
import Cards from './components/Cards';
import properties from './data';
import DisplayRenders from './components/DisplayRenders';
import Header from './components/Card/Header';
import Loader from './components/Loader';
import { MEMORY_LOCATIONS } from './constants';
import { imports, getSharedArrayBuffer } from './utils';
import { ExportsForWebAssembly } from './types';

let mutableRootNumber = 0;
let sharedMemoryDataView: DataView;

const App = () => {
  // Instantiating Web Assembly
  const { isLoaded, error, instance } = useAssembly<
    Instance<ExportsForWebAssembly>
  >({
    assemblySource: 'main.wasm',
    imports,
  });

  // Creating ref to track react renders
  const refCalculatedRenders = useRef(0);
  const [someState, setSomeState] = useState<number>(0);

  console.log('Rendered');

  const readMemoryFromIndex = instance?.exports.readMemoryFromIndex;
  const totalPrice = instance?.exports.totalPrice;

  const memory = instance?.exports.memory;
  if (memory) {
    sharedMemoryDataView = new DataView(memory.buffer);
  }

  useEffect(() => {
    // Force re-render every sec
    const IntervalTimeout = setInterval(() => {
      setSomeState(someState + 1);
    }, 1000);

    // Incrementing ref to the latest count of renders
    refCalculatedRenders.current += 1;
    mutableRootNumber += 1;

    // Writing to shared memory bits the number of renders
    if (sharedMemoryDataView) {
      const latestValueToStore =
        sharedMemoryDataView.getUint8(MEMORY_LOCATIONS.RENDERS) + 1;
      sharedMemoryDataView.setUint8(
        MEMORY_LOCATIONS.RENDERS,
        latestValueToStore,
      );
    }

    return function cleanup(): void {
      clearInterval(IntervalTimeout);
    };
  });

  const getRenderingstats = () => ({
    refCalculatedRenders: refCalculatedRenders.current,
    mutableRootNumber,
    sharedMemoryDataViewValue: sharedMemoryDataView.getUint8(
      MEMORY_LOCATIONS.RENDERS,
    ),
  });

  return (
    <AppContainer>
      {isLoaded || error ? (
        <>
          <Header heading="WebAssembly Demo" />
          {totalPrice && memory && (
            <Cards
              properties={properties}
              totalPrice={totalPrice}
              sharedArrayBuffer={getSharedArrayBuffer(memory)}
            />
          )}
          <ErrorBlock
            level={Level.ERROR}
            message={error?.message}
            hasError={!!error}
          />
          {readMemoryFromIndex && (
            <DisplayRenders
              readMemoryFromIndex={readMemoryFromIndex}
              {...getRenderingstats()}
            />
          )}
        </>
      ) : (
        <Loader />
      )}
    </AppContainer>
  );
};

export default App;
