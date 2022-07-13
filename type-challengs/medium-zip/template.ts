type Zip<T, V> = T extends [infer H, ...infer R]
  ? V extends [infer H1, ...infer R1]
    ? [[H, H1], ...Zip<R, R1>]
    : []
  : [];