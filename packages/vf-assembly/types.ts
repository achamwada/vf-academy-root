export interface AssemblyExports {
  totalPrice: (propertyValue: number, deposit: number) => number;
  readMemoryFromIndex: (index: number) => number;
}
export interface Instance<DefaultExports> {
  exports: AssemblyExports & DefaultExports;
}
