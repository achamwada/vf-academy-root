export interface Instance {
  exports: {
    add: (a: number, b: number) => number;
    totalPrice: (propertyValue: number, deposit: number) => number;
    readMemoryFromIndex: (index: number) => number;
  };
}
