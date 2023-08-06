/**
 * The challenge is to replicate the functionality of TypeScript's `Readonly<T>` type.
 * 
 * Explanation:
 * 
 * - We'll use a mapped type, which allows us to transform each property of the given type `T`.
 * - For every property `P` in type `T`, we use the `readonly` modifier to ensure it cannot be modified after being set.
 * 
 * By using this mapped type, we ensure that all properties of `T` are immutable.
 */

type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
}

// Tests (uncomment to verify the solution)

// type Foo = {
//   a: string
// }

// const a:Foo = {
//   a: 'BFE.dev',
// }
// a.a = 'bigfrontend.dev' // OK

// const b:MyReadonly<Foo> = {
//   a: 'BFE.dev'
// }
// b.a = 'bigfrontend.dev' // Error
