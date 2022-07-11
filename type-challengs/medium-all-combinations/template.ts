type AllCombinations<S extends string, U extends string = StringToUnion1<S>, P extends string = U> =
  U | (
    P extends any ? (
      `${P}${AllCombinations<S, U extends P ? never : U>}`
    ) : never
  )

type StringToUnion1<T extends string> =
  T extends `${infer First}${infer Rest}` ? (
    First | StringToUnion1<Rest>
  ) : T

type aa = AllCombinations<'ABC'>