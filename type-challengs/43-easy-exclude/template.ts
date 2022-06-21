type MyExclude<T, U> = T extends U ? never : T;

// type t2 = 'a' | 'b' | 'c'
// type t3 = 'a'
// type t1 = MyExclude<t2, t3>
