import { useEffect } from 'react';
import { useAssembly } from './hooks/useAssembly';

import { Instance } from '@vf/assembly/types';
import { ASUtil } from '@assemblyscript/loader';
import ErrorBlock, { Level } from './components/ErrorBlock';
import { AppContainer } from './styles';
import Cards from './components/Cards';
import properties from './data';
import DisplayRenders from './components/DisplayRenders';
import Header from './components/Card/Header';

function App() {
  const { format } = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  });

  const imports: WebAssembly.Imports = {
    auction: {
      log: console.log,
      currencyFormatter: format,
    },
  };

  const { isLoaded, error, instance } = useAssembly<Instance & ASUtil>({
    assemblySource: 'main.wasm',
    imports,
  });

  const readMemoryFromIndex = instance?.exports.readMemoryFromIndex;
  const totalPrice = instance?.exports.totalPrice;

  useEffect(() => {
    const m = instance;
  }, []);

  return (
    <AppContainer>
      <Header heading="WebAssembly Demo" />
      {isLoaded && <Cards properties={properties} totalPrice={totalPrice} />}
      <ErrorBlock
        level={Level.ERROR}
        message={error?.message}
        hasError={!!error}
      />
      {isLoaded && <DisplayRenders readMemoryFromIndex={readMemoryFromIndex} />}
    </AppContainer>
  );
}

export default App;
