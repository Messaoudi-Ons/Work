/* eslint-disable prettier/prettier */
export const LocationSchemaRs = {
    name: 'Location',
    embedded: true,
    properties: {
        rowstamp: 'string',
        DESCRIPTION: 'string?',
        LOCATION: 'string?',
        LOCATIONSID: 'int?',
        ORGID: 'string?',
        REPLACECOST: 'int?',
        SITEID: 'string?',
        STATUS: 'string?',
        STATUSDATE: 'string?',
        TYPE: 'string?',
    },
};
