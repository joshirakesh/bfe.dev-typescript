## 3. Implement `Readonly<T>`

The objective of this challenge is to replicate the functionality of TypeScript's built-in `Readonly<T>` type. This type should ensure that all properties of `T` are immutable.

### Task

Implement `MyReadonly<T>` that should exhibit the following behavior:

Given the type:

```typescript
type Foo = {
  a: string
}

The following scenarios should play out:

const a:Foo = {
  a: 'BFE.dev',
}
a.a = 'bigfrontend.dev'
// OK

const b:MyReadonly<Foo> = {
  a: 'BFE.dev'
}
b.a = 'bigfrontend.dev'
// Error
