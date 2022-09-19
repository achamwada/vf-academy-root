import { useState, useEffect } from 'react';
import { AsBind } from 'as-bind';

export interface AssemblyError {
  message: string;
}
export interface AssembyState {
  instance?: unknown;
  isLoaded: boolean;
  error?: Error;
}

export interface UseAssembly {
  assemblySource: string;
  imports?: WebAssembly.Imports;
}
export const useAssembly = ({
  assemblySource,
  imports,
}: UseAssembly): AssembyState => {
  const [state, setState] = useState<AssembyState>({ isLoaded: false });

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
