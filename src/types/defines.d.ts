// declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// declare type Omit<T, K>
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

declare type Writable<T> = { -readonly [P in keyof T]-?: T[P] };
declare type FromArray<T> = T extends (infer U)[] ? U : never;
declare type PromiseResult<T> = T extends Promise<infer U> ? U : never;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type VoidablePromise<T> = T extends Promise<any> ? Promise<void | PromiseResult<T>> : never;
