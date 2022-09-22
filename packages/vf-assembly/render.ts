memory.grow(50);

store<u8>(0, 2);

export function readMemoryFromIndex(i: u32): u32 {
  return load<u32>(i);
}
