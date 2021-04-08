/* eslint-disable prettier/prettier */
import { ServiceSchema } from './ServiceSchema';
export const ServiceListSchema = {
    name: 'ServiceList',

    properties: {
        SR: { type: 'list', objectType: 'Service' },
    },
};
