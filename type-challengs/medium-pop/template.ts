type Pop<T extends any[]> = T extends [...infer First,infer last] ? First : never

