type Chainable<T = {}> = {
  option<K extends string, V = any>(key: K extends keyof T ? never : K, value: V): Chainable<T & {[O in K] : V}>
  get(): T
}