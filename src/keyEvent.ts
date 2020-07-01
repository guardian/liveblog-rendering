// ----- Imports ----- //

import { Block } from '@guardian/content-api-models/v1/block';
import { fromNullable, map2, withDefault } from '@guardian/types/option';

import { maybeCapiDate } from 'capi';


// ----- Types ----- //

type KeyEvent = {
    id: string;
    title: string;
    published: Date;
}


// ----- Functions ----- //

const addKeyEvent =
    (keyEvents: KeyEvent[], id: string) =>
    (published: Date, title: string): KeyEvent[] =>
        [ ...keyEvents, { id, published, title } ];

const parse = (blocks: Block[]): KeyEvent[] =>
    blocks.reduce<KeyEvent[]>((keyEvents, block) => {
        if (block.attributes.keyEvent !== true) {
            return keyEvents;
        }

        const id = block.id;
        const published = maybeCapiDate(block.firstPublishedDate);
        const title = fromNullable(block.attributes.title);
        const updatedEvents = map2(addKeyEvent(keyEvents, id))(published)(title);

        return withDefault(keyEvents)(updatedEvents);
    }, []);


// ----- Exports ----- //

export type {
    KeyEvent,
}

export {
    parse,
}
