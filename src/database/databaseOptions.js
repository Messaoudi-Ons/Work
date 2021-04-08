/* eslint-disable prettier/prettier */
import { AssetSchema } from './Schemas/AssetSchema';
import { ServiceSchema } from './Schemas/ServiceSchema';
import { ServiceListSchema } from './Schemas/ListServiceSchema';
import { LocationSchema } from './Schemas/LocationSchema';
import { TesttSchema } from './Schemas/TestSchema';
import { AddressSchema } from './Schemas/TestSchema';
//definir les parametres de la bd
export const databaseOptions = {
    path: 'myrealm',
    schema: [
        ServiceSchema,
        AssetSchema,
        LocationSchema,
        TesttSchema,
        AddressSchema,
        ServiceListSchema,
    ],
    schemaVersion: 0,
};
