# 8. Implement Extract<T, U>

## Challenge Description

The challenge is to replicate the functionality of TypeScript's built-in `Extract<T, U>` utility type. This type constructs a new type by extracting from `T` those types that are assignable to `U`.

## Problem

Given:

```typescript
type Foo = 'a' | 'b' | 'c'
```

### Expected Results:

Here are the expected outcomes:

```typescript
type A = MyExtract<Foo, 'a'> // Expected: 'a'
type B = MyExtract<Foo, 'a' | 'b'> // Expected: 'a' | 'b'
type C = MyExtract<Foo, 'b' | 'c' | 'd' | 'e'> // Expected: 'b' | 'c'
type D = MyExtract<Foo, never> // Expected: never
```