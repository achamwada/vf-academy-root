memory.grow(2);

store<u8>(0, 1);

export function readMemoryFromIndex(i: i32): i32 {
  return load<u8>(i);
}
