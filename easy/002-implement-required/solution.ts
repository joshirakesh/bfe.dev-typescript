/**
 * The challenge is to replicate the functionality of TypeScript's `Required<T>` type.
 * 
 * Explanation:
 * 
 * - Using a mapped type, we can transform each property of the given type `T`.
 * - For every property `P` in type `T`, we make sure it retains its original type without the optional modifier.
 * 
 * By using this mapped type, we ensure that all properties of `T` are required.
 */

type MyRequired<T> = {
    [P in keyof T]-?: T[P];
}

// Tests (uncomment to verify the solution)
/*
type Foo = {
  a?: string
  b?: number
  c?: boolean
}

const a: MyRequired<Foo> = {}  // Error

const b: MyRequired<Foo> = {
  a: 'BFE.dev'
}  // Error

const c: MyRequired<Foo> = {
  b: 123
}  // Error

const d: MyRequired<Foo> = {
  b: 123,
  c: true
}  // Error

const e: MyRequired<Foo> = {
  a: 'BFE.dev',
  b: 123,
  c: true
}  // valid
*/
