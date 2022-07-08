type RemoveIndexSignature<T extends Record<string, any>> = {
  [
    K in keyof T as [T[K]] extends [undefined] ? never : K
  ]: T[K]
}