// ----- Imports ----- //

import React, { FC } from 'react';
import { none, some } from '@guardian/types/option';

import Block from './block';


// ----- Stories ----- //

const Default: FC = () =>
    <Block
        id="one"
        title={none}
        firstPublished={some(new Date())}
        lastModified={none}
    >Block content</Block>;

const WithTitle: FC = () =>
    <Block
        id="one"
        title={some("Title of a block")}
        firstPublished={some(new Date())}
        lastModified={none}
    >Block content</Block>;

const Updated: FC = () =>
    <Block
        id="one"
        title={none}
        firstPublished={some(new Date())}
        lastModified={some(new Date())}
    >Block content</Block>;


// ----- Exports ----- //

export default {
    component: Default,
    title: 'Block',
}

export {
    Default,
    WithTitle,
    Updated,
}
