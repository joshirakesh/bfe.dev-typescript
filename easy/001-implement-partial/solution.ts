/**
 * The goal of this challenge is to implement a type that simulates TypeScript's built-in `Partial<T>`. 
 * This type should make all properties of `T` optional.
 * 
 * Explanation:
 * 
 * - We're using a mapped type, which allows us to map over the properties of a type (`T` in this case).
 * - `[P in keyof T]` means for every property `P` in the type `T`.
 * - `T[P]` accesses the type of the property `P` within `T`.
 * - The `?` after `[P in keyof T]` makes each property optional.
 * 
 * By using this mapped type, we create a new type where each property of `T` is optional.
 */

type MyPartial<T> = {
    [P in keyof T]?: T[P];
}

// Tests (uncomment to check the solution)
/*
type Foo = {
  a: string
  b: number
  c: boolean
}

const a: MyPartial<Foo> = {}

const b: MyPartial<Foo> = {
  a: 'BFE.dev'
}

const c: MyPartial<Foo> = {
  b: 123
}

const d: MyPartial<Foo> = {
  b: 123,
  c: true
}

const e: MyPartial<Foo> = {
  a: 'BFE.dev',
  b: 123,
  c: true
}
*/
