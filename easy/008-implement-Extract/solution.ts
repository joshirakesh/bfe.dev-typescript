/**
 * The aim of this challenge is to replicate TypeScript's built-in `Extract<T, U>` type.
 * This utility type constructs a new type by extracting from `T` all types that are assignable to `U`.
 * 
 * Explanation:
 * 
 * 1. **What does `MyExtract<T, U>` do?**
 * 
 * The `MyExtract<T, U>` utility type takes two type arguments, `T` and `U`. `T` is a union of types, 
 * and `U` is the type (or types) that we want to extract from `T`. The utility type constructs a new 
 * type by iterating over the types in `T` and checking if each type is assignable to `U`.
 * 
 * 2. **How does `T extends U ? T : never` work?**
 * 
 * This is a conditional type. `T extends U ? T : never` checks, for each type `T` in the union, whether `T` is assignable to `U`.
 * If `T` is assignable to `U`, the type `T` is included in the resulting union. 
 * If `T` is not assignable to `U`, the type `never` is returned.
 * 
 * The `never` type represents values that never occur. By including `never` in the union, we essentially remove the types that are not assignable to `U`.
 * 
 * 3. **Why do we use `extends`?**
 * 
 * In TypeScript, `extends` is used to test whether a type is a subtype of another. If `T` extends `U`, it means `T` is a subtype of `U` or, in other words, `T` can be assigned to `U`.
 * 
 * 4. **Example**
 * 
 * Let's use the types `Foo` and `A` from your example:
 * 
 * type Foo = 'a' | 'b' | 'c';
 * type A = MyExtract<Foo, 'a'>; // Expected: 'a'
 * 
 * The `MyExtract` type iterates over the types in `Foo` ('a', 'b', and 'c'). For each type, it checks if the type extends 'a'. 
 * 
 * - For 'a', the condition is true, so 'a' is included in the resulting type. 
 * - For 'b' and 'c', the condition is false, so `never` is returned. 
 * 
 * The final type for `A` is 'a' | never | never`, which simplifies to 'a'. So, `type A = 'a', as expected.
 * 
 */

type MyExtract<T, U> = T extends U ? T : never;

// Testing our implementation

type Foo = 'a' | 'b' | 'c';

type A = MyExtract<Foo, 'a'>; // Expected: 'a'
type B = MyExtract<Foo, 'a' | 'b'>; // Expected: 'a' | 'b'
type C = MyExtract<Foo, 'b' | 'c' | 'd' | 'e'>; // Expected: 'b' | 'c'
type D = MyExtract<Foo, never>; // Expected: never

export { };