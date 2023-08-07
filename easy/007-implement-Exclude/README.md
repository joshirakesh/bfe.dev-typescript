# 7. Implement Exclude<T, K>

## Challenge Description

The challenge is to simulate the functionality of TypeScript's built-in `Exclude<T, K>` type. This utility type creates a new type by removing types from `T` that are assignable to `K`.

## Problem

Given:

```typescript
type Foo = 'a' | 'b' | 'c'
```

## Expected Results

Here are the expected outcomes:

```typescript
type A = MyExclude<Foo, 'a'> // Expected: 'b' | 'c'
type B = MyExclude<Foo, 'c'> // Expected: 'a' | 'b'
type C = MyExclude<Foo, 'c' | 'd'>  // Expected: 'a' | 'b'
type D = MyExclude<Foo, 'a' | 'b' | 'c'>  // Expected: never
```
