type StartsWith<T extends string, U extends string> = U extends "" 
? true
: T extends `${U}${infer Rest}`
? true
: false
