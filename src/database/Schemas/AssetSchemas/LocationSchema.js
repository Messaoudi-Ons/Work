/* eslint-disable prettier/prettier */
import { Orgid, Type } from './Enum';
export const LocationSchema = {
    name: 'Location',
    properties: {
        rowstamp: 'string',
        DESCRIPTION: 'string?',
        EXPECTEDLIFE: 'integer?',
        LOCATION: 'string',
        ORGID: Orgid,
        REPLACECOST: 'integer',
        TYPE: Type,
        SADDRESSCODE: 'string?',
        BIMIMPORTSRC: 'string?',
        BIMROOMNAME: 'string?',
        BIMUSAGE: 'string?',
        MODELID: 'string?',
    },
    primaryKey: '',
};
