import { Equal } from "@type-challenges/utils";

type Includes<T extends readonly any[], U> = T extends [infer K, ...infer Rest]
  ? [K, U] extends [U, K]
    ? Equal<U, K>
    : Includes<Rest, U>
  : false;

export { Includes };
