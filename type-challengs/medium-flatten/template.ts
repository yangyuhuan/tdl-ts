// type Flatten<T , R extends any[] = []> = T extends [infer F, ...infer Rest] ? 
// (F extends any[] ? Flatten<Rest, [...R,...Flatten<F>]>: Flatten<Rest, [...R,F]>) : R

type Flatten<T extends any[]> = T extends [infer F, ...infer Rest]
  ? F extends any[]
    ? [...Flatten<F>, ...Flatten<Rest>]
    : [F, ...Flatten<Rest>]
  : T;