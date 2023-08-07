/**
 * The aim of this challenge is to implement TypeScript's built-in `Omit<T, K>` type.
 * The Omit type lets you create a new type by picking all properties from a given type `T` and then removing `K`.
 *
 * Here is the approach we'll take:
 *
 * - We'll use TypeScript's built-in utility type `Exclude` to get a type that represents all keys of `T` excluding keys in `K`.
 * - We'll use a mapped type to iterate over each property in `T`. For each property `P` that is in the set of keys returned by `Exclude<keyof T, K>`, we'll assign the original type of that property from `T` to the new type.
 * 
 * By using this approach, we obtain a new type with all the properties from `T`, excluding those specified in `K`.
 */

type MyOmit<T, K extends keyof any> = {
    [P in Exclude<keyof T, K>]: T[P];
}

// Testing our implementation

type Foo = {
    a: string
    b: number
    c: boolean
}

type A = MyOmit<Foo, 'a' | 'b'>; // Expected: {c: boolean}
type B = MyOmit<Foo, 'c'>; // Expected: {a: string, b: number}
type C = MyOmit<Foo, 'c' | 'd'>; // Expected: {a: string, b: number}

export { };