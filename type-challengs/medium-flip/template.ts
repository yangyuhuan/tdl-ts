type Flip<T extends {[key:string | number] :any}> = {
  [P in keyof T as `${T[P]}`] : P
}