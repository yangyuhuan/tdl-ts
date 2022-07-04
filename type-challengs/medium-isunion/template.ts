type IsNever<T> = {k: T} extends {k: never} ? true : false
type IsUnion<T, B = T> = IsNever<T> extends true ? false:(T extends B? [B] extends [T] ? false: true: never)