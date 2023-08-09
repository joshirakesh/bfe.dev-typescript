type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;

// Testing implementation
type Foo = (a: string, b: number, c: boolean) => string;

type A = MyParameters<Foo>; // Expected: [string, number, boolean]
type B = A[0]; // Expected: string
// type C = MyParameters<{a: string}>; // This should produce an error

export { };