import { useState } from 'react';
import { useAssembly } from './hooks/useAssembly';

import { Instance } from '@vf/assembly/types';
import { ASUtil } from '@assemblyscript/loader';
import Card from './components/Card';
import ErrorBlock, { Level } from './components/ErrorBlock';
import { AppContainer } from './styles';
import Cards from './components/Cards';
import properties from './data';

function App() {
  const [count, setCount] = useState(0);
  const { format } = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
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

  return (
    <AppContainer>
      {readMemoryFromIndex && readMemoryFromIndex(0)}
      {instance && <Cards properties={properties} totalPrice={totalPrice} />}
      <ErrorBlock
        level={Level.ERROR}
        message={error?.message}
        hasError={!!error}
      />
    </AppContainer>
  );
}

export default App;
