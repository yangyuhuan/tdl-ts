type Falsy = 0 | '' | false | [] | Record<PropertyKey, never>
type AnyOf<T extends readonly any[]> = T extends Array<Falsy> ? false : true

