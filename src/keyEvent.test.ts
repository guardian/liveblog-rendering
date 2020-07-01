// ----- Imports ----- //

import { Block } from '@guardian/content-api-models/v1/block';
import Int64 from 'node-int64';

import { parse } from 'keyEvent';


// ----- Fixtures ----- //

const blocks: Block[] = [
    {
        id: 'one',
        bodyHtml: '',
        bodyTextSummary: '',
        attributes: {},
        published: true,
        firstPublishedDate: { dateTime: new Int64(2), iso8601: '' },
        contributors: [],
        elements: [],
    }
]


// ----- Tests ----- //

it('parses the expected number of key events', () => {
    const keyEvents = parse(blocks);

    expect(keyEvents).toBe([]);
});
