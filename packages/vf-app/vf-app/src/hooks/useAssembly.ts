import { useState, useEffect } from 'react';
import { instantiate } from 'as-bind';
import { UseAssembly, AssembyState } from '../types';
import { DEFAULT_OPTIONS } from '../constants';

export const useAssembly = <Instance>({
  assemblySource,
  imports = DEFAULT_OPTIONS,
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
        const instance = await instantiate(wasmFile, imports);
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
  }, [assemblySource]);

  return state;
};
