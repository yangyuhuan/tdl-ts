
type GreaterThan<
T extends number,
U extends number,
A extends unknown[] = []
> = A["length"] extends T
? false
: A["length"] extends U
? true
: GreaterThan<T, U, [...A, unknown]>;