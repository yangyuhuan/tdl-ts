type Reverse<T extends any[]> = T extends [...infer Rest, infer G]
  ? [G, ...Reverse<Rest>]
  : T;
