type Reverse1<T> = T extends [...infer F, infer L] ? [L, ...Reverse1<F>] : [];
type FlipArguments<T extends (...args: any) => any> = T extends (
  ...args: infer R
) => infer R1
  ? (...args: Reverse1<R>) => R1
  : never;
