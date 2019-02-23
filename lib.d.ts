// These definitions are required by Typescript when using --noLib.
// These definitions consider Love2D's Lua environment and how the
// tstl compiler behaves.

/**
 * Becomes a Lua object being used as an array.
 * In Lua, arrays start at 1.
 * tstl adds a +1 where you index array values.
 * e.g.
 * ts        lua (via tstl)
 * x[0]      x[0+1]
 */
interface Array<T> {
    /**
     * The length of the array.
     * tstl transpiles this to #array.
     * e.g.
     * ts              lua (via tstl)
     * array.length    #array
     */
    length: number;
}

/**
 * Transpiles to the same thing in Lua.
 */
interface Boolean {}

/**
 * tstl attempts to keep Functions functionally the same.
 */
interface Function {}

/**
 * Varargs in lua "..."
 */
interface IArguments {}

/**
 * Transpiles to the same thing in Lua.
 */
interface Number {}

/**
 * Becomes a table in Lua.
 */
interface Object {}

/**
 * Literal regular expressions are NOT SUPPORTED
 */
interface RegExp {}

/**
 * Transpiles to a literal string in Lua.
 */
interface String {}

/**
 * Make all properties in T optional
 */
type Partial<T> = {
    [P in keyof T]?: T[P];
};

/**
 * Make all properties in T required
 */
type Required<T> = {
    [P in keyof T]-?: T[P];
};

/**
 * Make all properties in T readonly
 */
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

/**
 * Construct a type with a set of properties K of type T
 */
type Record<K extends keyof any, T> = {
    [P in K]: T;
};

/**
 * Exclude from T those types that are assignable to U
 */
type Exclude<T, U> = T extends U ? never : T;

/**
 * Extract from T those types that are assignable to U
 */
type Extract<T, U> = T extends U ? T : never;

/**
 * Exclude null and undefined from T
 */
type NonNullable<T> = T extends null | undefined ? never : T;

/**
 * Obtain the parameters of a function type in a tuple
 */
type Parameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;

/**
 * Obtain the parameters of a constructor function type in a tuple
 */
type ConstructorParameters<T extends new (...args: any[]) => any> = T extends new (...args: infer P) => any ? P : never;

/**
 * Obtain the return type of a function type
 */
type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;

/**
 * Obtain the return type of a constructor function type
 */
type InstanceType<T extends new (...args: any[]) => any> = T extends new (...args: any[]) => infer R ? R : any;

/**
 * Marker for contextual 'this' type
 */
interface ThisType<T> { }
