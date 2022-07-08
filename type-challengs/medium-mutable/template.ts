type Mutable<T extends Record<PropertyKey, unknown> | ReadonlyArray<unknown>> = {
  -readonly [key in keyof T]: T[key]
}

type List = [1, 2, 3]

type cases = Mutable<Readonly<List>>