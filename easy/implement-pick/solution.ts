/**
 * The goal of this challenge is to simulate TypeScript's built-in `Pick<T, K>` type.
 * This utility type will allow us to pick certain properties from a given type.
 * 
 * Explanation:
 * 
 * - Using a mapped type, we transform the properties of the type `T` based on the keys provided in `K`.
 * - For each property `P` in the union `K`, we retain the type of that property from `T`.
 * 
 * By using this approach, we obtain a new type with only the properties specified in `K`.
 */

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
}

// The type we will use for our tests
type Foo = {
    a: string
    b: number
    c: boolean
}

// Tests (uncomment to check the solution)
// type A = MyPick<Foo, 'a' | 'b'>; // Expected: {a: string, b: number}
// type B = MyPick<Foo, 'c'>;      // Expected: {c: boolean}
// type C = MyPick<Foo, 'd'>;   // This will cause an error, as expected.
