export interface AssemblyExports {
  add: (a: number, b: number) => number;
  totalPrice: (propertyValue: number, deposit: number) => number;
  readMemoryFromIndex: (index: number) => number;
}
export interface Instance<DefaultExports> {
  exports: AssemblyExports & DefaultExports;
}
