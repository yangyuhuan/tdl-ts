type RequiredByKeys<T, K extends keyof any = keyof T> = {
  [P in keyof T as P extends K ? P : never]-? : T[P] 
} & {
  [P in keyof T as P extends K ? never : P] : T[P] 
} extends infer Rest ? {
[P in keyof Rest] : Rest[P]
}: never


