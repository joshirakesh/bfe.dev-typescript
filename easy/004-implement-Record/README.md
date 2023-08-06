## 4. Implement `Record<K, V>`

The objective of this challenge is to replicate the functionality of TypeScript's built-in `Record<K, V>` type. This type should produce an object with keys of type `K` and values of type `V`.

### Task

Implement `MyRecord<K, V>` to match the behavior of the native `Record` type:

Given the type:

```typescript
type Key = 'a' | 'b' | 'c'

The following scenarios should play out:

const a: Record<Key, string> = {
  a: 'BFE.dev',
  b: 'BFE.dev',
  c: 'BFE.dev'
}
a.a = 'bigfrontend.dev' // OK
a.b = 123 // Error
a.d = 'BFE.dev' // Error

Additionally, keys for the MyRecord type should only be number, string, or symbol:

type Foo = MyRecord<{a: string}, string> // This should result in a TypeScript error.
