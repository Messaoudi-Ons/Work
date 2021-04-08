/* eslint-disable prettier/prettier */
import { Metertype } from './Enum';
export const MeterSchema = {
    name: 'Meter',
    properties: {
        rowstamp: 'string',
        DOMAINID: 'string?',
        METERTYPE: Metertype,
    },
    primaryKey: '',
};
