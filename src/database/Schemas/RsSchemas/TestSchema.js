/* eslint-disable prettier/prettier */
export const AddressSchema = {
  name: 'Address',
  embedded: true, // default: false
  properties: {
    street: 'string?',
    country: 'string?',
  },
};

export const TesttSchema = {
  name: 'Testt',
  properties: {
    typeI: 'int',
    address: 'string',
  },
  primaryKey: 'typeI',
};
