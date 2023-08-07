# 6. Implement Omit<T, K>

## Challenge Description

The challenge is to replicate the functionality of TypeScript's built-in `Omit<T, K>` type. This utility type constructs a type by picking all properties from `T` and then removing `K`.

## Problem

Given a type `Foo`:

```typescript
type Foo = {
  a: string
  b: number
  c: boolean
}
```

Your task is to implement the `MyOmit` type that replicates the functionality of TypeScript's `Omit<T, K>` type.

## Expected Results

Here are the expected outcomes:

```typescript
type A = MyOmit<Foo, 'a' | 'b'> // Expected: {c: boolean}
type B = MyOmit<Foo, 'c'> // Expected: {a: string, b: number}
type C = MyOmit<Foo, 'c' | 'd'> // Expected: {a: string, b: number}
```

The `MyOmit` type should construct a type by picking all properties from `Foo` and then removing those specified in the second parameter.
