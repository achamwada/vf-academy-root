interface AssemblyBind {
  AsBind: {
    instantiate: (
      module: WebAssembly.Module,
      importObject?: WebAssembly.Imports,
    ) => Promise<WebAssembly.WebAssemblyInstantiatedSource> &
      Promise<WebAssembly.Instance>;
  };
}
declare module 'as-bind' {
  export const AsBind = AssemblyBind;
}
