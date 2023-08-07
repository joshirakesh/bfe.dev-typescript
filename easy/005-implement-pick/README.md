# 5. Implement Pick<T, K>

The challenge is to replicate the functionality of TypeScript's built-in `Pick<T, K>` type. This utility type returns a new type by picking the specified properties from an existing type.

## Question

Given:
```typescript
type Foo = {
  a: string
  b: number
  c: boolean
}

Expected outcomes:

type A = MyPick<Foo, 'a' | 'b'> // {a: string, b: number}
type B = MyPick<Foo, 'c'> // {c: boolean}
type C = MyPick<Foo, 'd'> // Error
