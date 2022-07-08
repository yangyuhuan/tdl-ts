// type Diff<O, O1> = {
//  [K in Exclude<keyof O, keyof  O1> | Exclude<keyof  O1, keyof O>] : K extends keyof O ? O[K]: K extends keyof O1? O1[K]: never
// }

type Diff<O, O1> = {
  [k in Exclude<keyof O, keyof O1> | Exclude<keyof O1, keyof O>]: k extends keyof O ? O[k] : O1[Extract<keyof O1, k>]
}