## 2. Implement `Required<T>`

The challenge is to implement a type that simulates TypeScript's built-in `Required<T>`. This type ensures that all properties of `T` are required (i.e., non-optional).

### Task

Implement `MyRequired<T>` that should work as follows:

Given the type:

```typescript
type Foo = {
  a?: string
  b?: number
  c?: boolean
}

The following scenarios should occur:

const a: MyRequired<Foo> = {}
// Error

const b: MyRequired<Foo> = {
  a: 'BFE.dev'
}
// Error

const c: MyRequired<Foo> = {
  b: 123
}
// Error

const d: MyRequired<Foo> = {
  b: 123,
  c: true
}
// Error

const e: MyRequired<Foo> = {
  a: 'BFE.dev',
  b: 123,
  c: true
}
// valid
