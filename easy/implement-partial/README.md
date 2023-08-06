# 1. Implement MyPartial<T>

### Objective:

The goal of this challenge is to implement a type `MyPartial<T>` that simulates the behavior of TypeScript's built-in `Partial<T>`. The resulting type should represent all subsets of type `T`.

### Problem Description:

Given a type `Foo`:

```typescript
type Foo = {
  a: string
  b: number
  c: boolean
}

Your MyPartial<T> should satisfy all of the following conditions:

typescript
Copy code
const a: MyPartial<Foo> = {} // valid

const b: MyPartial<Foo> = {
  a: 'BFE.dev'
} // valid

const c: MyPartial<Foo> = {
  b: 123
} // valid

const d: MyPartial<Foo> = {
  b: 123,
  c: true
} // valid

const e: MyPartial<Foo> = {
  a: 'BFE.dev',
  b: 123,
  c: true
} // valid


