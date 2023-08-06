/**
 * The objective is to replicate the functionality of TypeScript's `Record<K, V>` type.
 * 
 * Explanation:
 * 
 * - `MyRecord<K, V>` is intended to generate an object type with keys from `K` and values of type `V`.
 * 
 * - The constraint `K extends keyof any` ensures that `K` is constrained to the valid key types for objects in TypeScript, which are `number`, `string`, or `symbol`.
 * 
 * - The `keyof` operator in TypeScript fetches a union of the keys (property names) of an object type. When applied to a specific type, like `Person`, it might give something like "name" | "age".
 * 
 * - However, when `keyof` is used with `any`, which is a wildcard type in TypeScript, it infers a union of all valid key types for objects in TypeScript: `number`, `string`, and `symbol`. 
 *   This is based on the foundational types of object keys in JavaScript.
 * 
 * - Thus, `K extends keyof any` is a way to ensure that the keys provided to `MyRecord` are of a valid type for object keys.
 * 
 * Using this mapped type with the constraint, we can generate an object type where keys are from `K` and all values are of type `V`.
 */

type MyRecord<K extends keyof any, V> = {
    [P in K]: V;
}

// Tests (uncomment to verify the solution)

// type Key = 'a' | 'b' | 'c'

// const a: MyRecord<Key, string> = {
//   a: 'BFE.dev',
//   b: 'BFE.dev',
//   c: 'BFE.dev'
// }
// a.a = 'bigfrontend.dev' // OK
// a.b = 123 // Error
// a.d = 'BFE.dev' // Error

// type Foo = MyRecord<{a: string}, string> // Error
