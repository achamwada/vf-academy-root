import { useEffect, useRef, useState } from 'react';
import { useAssembly } from './hooks/useAssembly';

import { Instance } from '@vf/assembly/types';
import { ASUtil } from '@assemblyscript/loader';
import ErrorBlock, { Level } from './components/ErrorBlock';
import { AppContainer } from './styles';
import Cards from './components/Cards';
import properties from './data';
import DisplayRenders from './components/DisplayRenders';
import Header from './components/Card/Header';
import Loader from './components/Loader';
import { MEMORY_LOCATIONS } from './constants';
import { imports, getSharedArrayBuffer } from './utils';

interface ExportsForWebAssembly extends ASUtil {
  memory?: WebAssembly.Memory & {
    free: (ptr: number) => void;
  };
}
let mutableRootNumber = 0;
let sharedMemoryDataView: DataView;

const App = () => {
  const { isLoaded, error, instance } = useAssembly<
    Instance<ExportsForWebAssembly>
  >({
    assemblySource: 'main.wasm',
    imports,
  });

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
    const IntervalTimeout = setInterval(() => {
      setSomeState(someState + 1);
    }, 10);

    refCalculatedRenders.current += 1;
    mutableRootNumber += 1;

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

  useEffect(() => {
    return () => {
      memory?.free(getSharedArrayBuffer(memory)[MEMORY_LOCATIONS.RENDERS]);
    };
  }, []);

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
