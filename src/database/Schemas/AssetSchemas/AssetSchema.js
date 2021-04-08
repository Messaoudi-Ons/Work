/* eslint-disable prettier/prettier */
import { AssetmeterSchema } from './AssetmeterSchema';
import { DoclinkSchema } from './DoclinkSchema';
import { Nomapplication, Orgid, Siteid, Status } from './Enum';
import { LocationSchema } from './LocationSchema';
export const AsseteSchema = {
    name: 'Asset',
    properties: {
        rowstamp: 'string',
        ASSETID: 'integer',
        ASSETNUM: 'string',
        ASSETUID: 'integer',
        DESCRIPTION: 'string?',
        EXPECTEDLIFE: 'integer?',
        NOMAPPLICATION: { type: Nomapplication, optional: true },
        ORGID: Orgid,
        SITEID: Siteid,
        STATUS: Status,
        TESTDATE: 'date?',
        ASSETTYPE: 'string?',
        SERIALNUM: 'string?',
        LOCATION: 'string?',
        DOCLINKS: { type: DoclinkSchema, optional: true },
        ASSETMETER: { type: AssetmeterSchema, optional: true },
        LOCATIONS: { type: LocationSchema, optional: true },
        MANUFACTURER: 'string?',
        VENDOR: 'string?',
        INSTALLDATE: 'date?',
    },
    primaryKey: 'ASSETID',
};
