/* eslint-disable prettier/prettier */
export const AssetSchema = {
    name: 'Asset',
    embedded: true, // default: false

    properties: {
        rowstamp: 'string',
        ASSETID: 'int',
        ASSETNUM: 'string?',
        ASSETTYPE: 'string?',
        ASSETUID: 'int',
        LOCATION: 'string?',
        SITEID: 'string?',
        VENDOR: 'string?',
    },
};
