type PartialByKeys<T, K extends keyof any = keyof T> = {
  [P in keyof T  as P extends K ? P : never]?: T[P]
} & {
  [P in keyof T  as P extends K ? never : P ]: T[P]
}  extends infer Result ? {
  [k in keyof Result]: Result[k]
} : never

