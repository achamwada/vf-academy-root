export const getSharedArrayBuffer = (memory: WebAssembly.Memory): Int8Array => {
  const sharedArrayBuffer = new Int8Array(memory?.buffer);

  return sharedArrayBuffer;
};

const { format } = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
});

export const imports: WebAssembly.Imports = {
  auction: {
    log: () => null,
    currencyFormatter: format,
  },
};
