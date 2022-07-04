//方案一
import { Equal } from "@type-challenges/utils";
type IsNever<T> = Equal<T, never>
export { IsNever };

//方案二
// type IsNever<T> =  [T] extends [never] ? true : false