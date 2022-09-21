import { useEffect, useRef } from 'react';
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

interface ExportsForWebAssembly extends ASUtil {
  memory?: WebAssembly.Memory & {
    free: (ptr: number) => void;
  };
}

const getSharedArrayBuffer = (memory: WebAssembly.Memory): Int8Array => {
  const sharedArrayBuffer = new Int8Array(memory?.buffer);

  return sharedArrayBuffer;
};

const { format } = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
});

let mutableRootNumber = 0;

const App = () => {
  let { current: refCalculatedRenders } = useRef(0);

  refCalculatedRenders++;
  mutableRootNumber++;

  const imports: WebAssembly.Imports = {
    auction: {
      log: console.log,
      currencyFormatter: format,
    },
  };

  const { isLoaded, error, instance } = useAssembly<
    Instance<ExportsForWebAssembly>
  >({
    assemblySource: 'main.wasm',
    imports,
  });

  const readMemoryFromIndex = instance?.exports.readMemoryFromIndex;
  const totalPrice = instance?.exports.totalPrice;

  const memory = instance?.exports.memory;

  let sharedArrayBuffer: Int8Array, renderingStats;
  if (memory) {
    sharedArrayBuffer = new Int8Array(memory?.buffer);
    sharedArrayBuffer[MEMORY_LOCATIONS.RENDERS]++;

    renderingStats = {
      refCalculatedRenders,
      mutableRootNumber,
      sharedMemoryCalculatedRenders:
        sharedArrayBuffer[MEMORY_LOCATIONS.RENDERS],
    };
  }
  const getRenderingstats = () => ({
    refCalculatedRenders,
    mutableRootNumber,
    sharedMemoryCalculatedRenders: sharedArrayBuffer[MEMORY_LOCATIONS.RENDERS],
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
