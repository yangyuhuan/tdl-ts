type IsNever1<TValue> = TValue[] extends never[] ? true : false;
type SafeUnion<TUnion> = IsNever1<TUnion> extends true ? "" : TUnion;
type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${SafeUnion<`__${E[number]}`>}${SafeUnion<`--${M[number]}`>}`;
