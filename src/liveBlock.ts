// ----- Imports ----- //

import { Option, fromNullable } from '@guardian/types/option';
import { BlockElement } from '@guardian/content-api-models/v1/blockElement';
import { Block } from '@guardian/content-api-models/v1/block';

import { maybeCapiDate } from './capi';


// ----- Types ----- //

type LiveBlock = {
    id: string;
    isKeyEvent: boolean;
    title: Option<string>;
    firstPublished: Option<Date>;
    lastModified: Option<Date>;
    body: BlockElement[];
}


// ----- Functions ----- //

const parse = (block: Block): LiveBlock =>
    ({
        id: block.id,
        isKeyEvent: block?.attributes?.keyEvent ?? false,
        title: fromNullable(block?.title),
        firstPublished: maybeCapiDate(block?.firstPublishedDate),
        lastModified: maybeCapiDate(block?.lastModifiedDate),
        body: block.elements,
    });


// ----- Exports ----- //

export type {
    LiveBlock,
}

export {
    parse,
}
