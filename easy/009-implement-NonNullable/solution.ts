/**
 * The goal of this challenge is to create a utility type `MyNonNullable<T>`, which replicates the behavior of TypeScript's built-in `NonNullable<T>` type.
 * The `NonNullable<T>` utility type excludes `null` and `undefined` from `T`.
 * 
 * Explanation:
 * 
 * - We start by defining `MyNonNullable<T>`. Here, `T` represents a type variable which could be any type. This means `T` could represent a primitive type (like string, number, boolean), an object type, or even a union of multiple types.
 * 
 * - We use the extends keyword to set up a condition: `T extends null | undefined ? never : T`.
 * 
 * - This condition checks each member of the type `T`. If a member extends (is a subtype of) `null` or `undefined`, it is replaced with `never`. The `never` type in TypeScript is a subtype of every type, but no type is a subtype of `never` (except `never` itself). By replacing `null` and `undefined` with `never`, we effectively remove these types from the union.
 *
 * - If the member does not extend `null` or `undefined`, it means that the member is some other type (string, number, boolean, etc.). We want to keep these types in the union, so we simply return the member itself.
 *
 * By using this approach, we obtain a new type which is identical to the input type `T`, but with `null` and `undefined` removed.
 */

type MyNonNullable<T> = T extends null | undefined ? never : T;

// Testing our implementation

type Foo = 'a' | 'b' | null | undefined;

type A = MyNonNullable<Foo>; // Expected: 'a' | 'b'
