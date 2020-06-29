// ----- Imports ----- //

import { CapiDateTime } from '@guardian/content-api-models/v1/capiDateTime';
import { Option, some, none, fromNullable, andThen } from '@guardian/types/option';

import { pipe2 } from './lib';


// ----- Functions ----- //

function dateFromString(date: string): Option<Date> {
    try {
        return some(new Date(date));
    } catch(e) {
        return none;
    }
}

const capiDateTimeToDate = (date: CapiDateTime): Option<Date> =>
    // Thrift definitions define some dates as CapiDateTime but CAPI returns strings
    dateFromString(date.iso8601);

const maybeCapiDate = (date: CapiDateTime | undefined): Option<Date> =>
    pipe2(date, fromNullable, andThen(capiDateTimeToDate));


// ----- Exports ----- //

export {
    maybeCapiDate,
}
