import { useState, useEffect } from 'react';
import { AsBind } from 'as-bind';

export interface AssemblyError {
  message: string;
}
export interface AssembyState<Instance> {
  instance?: Instance;
  isLoaded: boolean;
  error?: Error;
}

export interface UseAssembly {
  assemblySource: string;
  imports?: WebAssembly.Imports;
}
export const useAssembly = <Instance>({
  assemblySource,
  imports,
}: UseAssembly): AssembyState<Instance> => {
  const [state, setState] = useState<AssembyState<Instance>>({
    isLoaded: false,
  });

  useEffect(() => {
    const abortController = new AbortController();

    const setAssemblyInstance = async () => {
      try {
        const wasmFile = await fetch(assemblySource, {
          signal: abortController.signal,
        });
        if (!wasmFile.ok) {
          throw new Error(`Failed to fetch resource ${assemblySource}.`);
        }
        const instance = await AsBind.instantiate(wasmFile, imports);
        if (!abortController.signal.aborted) {
          setState({
            ...state,
            isLoaded: true,
            instance,
          });
        }
      } catch (error) {
        if (!abortController.signal.aborted && error instanceof Error) {
          setState({
            ...state,
            error,
          });
        }
      }
    };
    setAssemblyInstance();

    return function cleanup() {
      abortController.abort();
    };
  }, [assemblySource, imports]);

  return state;
};
