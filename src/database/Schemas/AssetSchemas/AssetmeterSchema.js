/* eslint-disable prettier/prettier */
import { MeterSchema } from './MeterSchema';

export const AssetmeterSchema = {
    name: 'Assetmeter',
    properties: {
        rowstamp: 'string',
        LASTREADING: 'string?',
        LASTREADINGDATE: 'date?',
        LINEARASSETMETERID: 'integer',
        METERNAME: 'string',
        METER: MeterSchema,
        MEASUREUNITID: 'string?',
        READINGTYPE: 'Readingtype?',
    },
    primaryKey: '',
};
