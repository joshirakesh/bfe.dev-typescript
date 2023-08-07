# 10. Implement Parameters<T>

## Challenge Description

The challenge is to replicate the functionality of TypeScript's built-in `Parameters<T>` type. This utility type constructs a tuple type from the types of a function's parameters.

## Problem

Given:
```typescript
type Foo = (a: string, b: number, c: boolean) => string
```

### Expected Results:

Here are the expected outcomes:

```typescript
type A = MyParameters<Foo>; // Expected: [a:string, b: number, c:boolean]
type B = A[0]; // Expected: string
type C = MyParameters<{a: string}>; // Expected: Error
```