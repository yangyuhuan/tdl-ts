type LengthOfString<S extends string, R extends any[] = []> = S extends `${infer First}${infer Rest}`? 
LengthOfString<Rest,[First,...R]> : R['length']