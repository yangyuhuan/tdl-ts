type Space = ' '| '\n' | '\t'

type Trim<S extends string> = S extends `${Space}${infer P}`|`${infer P}${Space}`? Trim<P>: S
