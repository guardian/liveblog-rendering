// ----- Functions ----- //

const pipe = <A, B>(a: A, f: (_a: A) => B): B => f(a);
const pipe2 = <A, B, C>(a: A, f: (_a: A) => B, g: (_b: B) => C): C => g(f(a));
const pipe3 = <A, B, C, D>(a: A, f: (_a: A) => B, g: (_b: B) => C, h: (_c: C) => D): D =>
    h(g(f(a)));


// ----- Exports ----- //

export {
    pipe,
    pipe2,
    pipe3,
}
