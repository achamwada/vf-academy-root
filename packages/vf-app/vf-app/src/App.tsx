import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { useAssembly } from './hooks/useAssembly';
import './App.css';

import { Instance } from '@vf/assembly/types';
function App() {
  const [count, setCount] = useState(0);

  const { isLoaded, error, instance } = useAssembly<Instance>({
    assemblySource: 'main.wasm',
  });

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {isLoaded && instance && instance.exports.add(5, 7)}
      {error && error.message}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
