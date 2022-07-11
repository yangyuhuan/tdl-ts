type Fibonacci<
  T extends number,
  I1 extends any[] = [1],
  I2 extends any[] = [1],
  Turn extends any[] = [1],
  I3 extends any[] = [...I1, ...I2]
> = Turn["length"] extends T
  ? I1["length"]
  : Fibonacci<T, I2, I3, [1, ...Turn]>;