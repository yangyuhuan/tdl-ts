type TupleToNestedObject<T extends any[], U> = 
  T[number] extends never ? U  
    : T extends [infer F ,... infer R] ?  
      F extends string | number | symbol ?  { [K in F] : TupleToNestedObject<R,U>} : never 
      : never