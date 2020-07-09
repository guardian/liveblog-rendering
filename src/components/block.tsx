// ----- Imports ----- //

import React, { FC, ReactNode } from 'react';
import { Option } from '@guardian/types/option';

import { MaybeRender } from '../lib';


// ----- Sub-Components ----- //

const PublishDate = (props: { date: Date }) =>
    <header>
        <time>{props.date.toLocaleString()}</time>
    </header>

const UpdateDate = (props: { date: Date }) =>
    <footer>
        <time>{props.date.toLocaleString()}</time>
    </footer>

const Title = (props: { title: string }) =>
    <h2>{props.title}</h2>


// ----- Component ----- //

interface Props {
    id: string;
    title: Option<string>;
    firstPublished: Option<Date>;
    lastModified: Option<Date>;
    children: ReactNode;
}

const Block: FC<Props> = (props) =>
    <article>
        <MaybeRender option={props.firstPublished}>
            {date => <PublishDate date={date} />}
        </MaybeRender>
        <main>
            <MaybeRender option={props.title}>
                {title => <Title title={title} />}
            </MaybeRender>
            {props.children}
        </main>
        <MaybeRender option={props.lastModified}>
            {date => <UpdateDate date={date} />}
        </MaybeRender>
    </article>


// ----- Exports ----- //

export default Block;
