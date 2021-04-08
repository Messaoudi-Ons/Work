/* eslint-disable prettier/prettier */
import { Nomapplication } from './Enum';

export const DoclinkSchema = {
    name: 'Doclink',
    properties: {
        rowstamp: 'string',
        ADDINFO: 'boolean',
        DOCINFOID: 'integer',
        DOCLINKSID: 'integer',
        DOCTYPE: 'string',
        DOCUMENT: 'string',
        OWNERID: 'integer',
        OWNERTABLE: Nomapplication,
        SHOW: 'boolean',
        UPLOAD: 'boolean',
        URLNAME: 'string',
        URLTYPE: 'string',
        WEBURL: 'string',
        DESCRIPTION: 'string?',
    },
    primaryKey: '',
};
