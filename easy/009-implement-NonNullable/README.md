# 9. Implement NonNullable<T>

## Challenge Description

The challenge is to replicate the functionality of TypeScript's built-in `NonNullable<T>` type. This utility type constructs a type by excluding `null` and `undefined` from `T`.

## Problem

You need to implement a utility type `MyNonNullable<T>` that behaves the same as the built-in `NonNullable<T>`.

Here's how `MyNonNullable<T>` should behave:

```typescript
type Foo = 'a' | 'b' | null | undefined;
```

### Expected Results:

Here are the expected outcomes:

```typescript
type A = MyNonNullable<Foo>; // Expected: 'a' | 'b'
```