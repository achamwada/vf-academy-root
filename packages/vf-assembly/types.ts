export declare function log(arg0: string): void;

export interface Instance {
  exports: {
    add: (a: number, b: number) => number;
    totalPrice: (propertyValue: number, deposit: number) => number;
  };
}
