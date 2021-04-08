/* eslint-disable prettier/prettier */
import { AssetSchema } from './AssetSchema';
import { LocationSchema } from './LocationSchema';

export const ServiceSchema = {
  name: 'Service',
  properties: {
    rowstamp: 'string',
    CLASS: 'string',
    DESCRIPTION: 'string?',
    DESCRIPTION_LONGDESCRIPTION: 'string?',
    FAILURECODE: 'string?',
    HASLD: 'bool?',
    LANGCODE: 'string?',
    REPORTDATE: 'string?',
    REPORTEDPRIORITY: 'int?',
    SITEID: 'string?',
    STATUS: 'string?',
    TICKETID: 'string',
    TICKETUID: 'int',
    ASSET: 'Asset[]',
    LOCATIONS: 'Location[]',
  },
  primaryKey: 'TICKETID',
};
