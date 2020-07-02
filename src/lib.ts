// ----- Imports ----- //

import { ReactElement } from 'react';
import { Option, map, withDefault } from '@guardian/types/option';


// ----- Functions ----- //

const pipe = <A, B>(a: A, f: (_a: A) => B): B => f(a);
const pipe2 = <A, B, C>(a: A, f: (_a: A) => B, g: (_b: B) => C): C => g(f(a));
const pipe3 = <A, B, C, D>(a: A, f: (_a: A) => B, g: (_b: B) => C, h: (_c: C) => D): D =>
    h(g(f(a)));

function MaybeRender<A>(props: {
    children: (a: A) => ReactElement,
    option: Option<A>,
}): ReactElement | null {
    return pipe2(
        props.option,
        map(props.children),
        withDefault<ReactElement | null>(null),
    );
}


// ----- Exports ----- //

export {
    pipe,
    pipe2,
    pipe3,
    MaybeRender,
}
