/**
 * The goal of this challenge is to simulate TypeScript's built-in `Exclude<T, U>` type.
 * This utility type constructs a type by excluding from T those types that are assignable to U.
 * 
 * - T represents a union of types.
 * - U is the type (or types) we want to exclude from T.
 * 
 * Explanation:
 * 
 * TypeScript's conditional types have a distributive property over union types.
 * If T is a union type, the conditional type will be applied to each member of the union.
 * 
 * For example, for type T = 'a' | 'b' | 'c', and U = 'a', TypeScript will perform the check:
 * 
 * - 'a' extends 'a' ? never : 'a'  => never (because 'a' is assignable to 'a')
 * - 'b' extends 'a' ? never : 'b'  => 'b' (because 'b' is not assignable to 'a')
 * - 'c' extends 'a' ? never : 'c'  => 'c' (because 'c' is not assignable to 'a')
 * 
 * Finally, TypeScript constructs the new type from the results, which gives us 'b' | 'c' in this case.
 * 
 * This is exactly what we want to achieve with our custom `MyExclude` type.
 */

type MyExclude<T, U> = T extends U ? never : T;

// Testing our implementation

type Foo = 'a' | 'b' | 'c';

type A = MyExclude<Foo, 'a'>; // Expected: 'b' | 'c'
type B = MyExclude<Foo, 'c'>; // Expected: 'a' | 'b'
type C = MyExclude<Foo, 'c' | 'd'>; // Expected: 'a' | 'b'
type D = MyExclude<Foo, 'a' | 'b' | 'c'>; // Expected: never
