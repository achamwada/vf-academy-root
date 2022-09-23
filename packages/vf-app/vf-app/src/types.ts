import { ASUtil } from '@assemblyscript/loader';

export interface AssemblyError {
  message: string;
}
export interface AssembyState<Instance> {
  instance?: Instance & WebAssembly.Memory;
  isLoaded: boolean;
  error?: Error;
}

export interface UseAssembly {
  assemblySource: string;
  imports?: WebAssembly.Imports;
}

export interface ExportsForWebAssembly extends ASUtil {
  memory?: WebAssembly.Memory & {
    free: (ptr: number) => void;
  };
}
