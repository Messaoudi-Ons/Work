/* eslint-disable prettier/prettier */
import Realm from 'realm';
import { databaseOptions } from './databaseOptions';
import { ServiceSchema } from './Schemas/RsSchemas/ServiceSchema';
import { LocationSchemaRs } from './Schemas/RsSchemas/LocationSchema';
import { TesttSchema } from './Schemas/RsSchemas/TestSchema';
import { AdressSchema } from './Schemas/RsSchemas/TestSchema';
import { ServiceListSchema } from './Schemas/RsSchemas/ListServiceSchema';

export const SERVICE_SCHEMA = 'Service';
export const ASSET_SCHEMA = 'Asset';

//Insertion element par element
export const insertNewService = async service => {
  const realm = await Realm.open(databaseOptions);
  console.log(' ****** opened to insert ****************');
  realm.write(() => {
    console.log(" debut d'insertion ");

    let res = [];

    for (let i = 0; i < service.length; i++) {
      res[i] = realm.create(SERVICE_SCHEMA, service[i]);

      console.log(`service created ** : ${res[i].TICKETID} `);
    }
  });
};
//Service List Insertion
export const insertListServices = async service => {
  const realm = await Realm.open(databaseOptions);
  console.log(' ****** opened to insert ****************');
  realm.write(() => {
    console.log(" debut d'insertion ");

    //sr = realm.create("ServiceList", service);
    //display result of insertion
    const allServices = realm.objects('ServiceList');
    //allServices[0].SR.map((elt) => console.log(elt.TICKETID));
    //allServices.map(allServices).SR.map((elt) => console.log(elt.TICKETID));
    allServices.map(services => {
      services.SR.map(elt => console.log(elt.TICKETID));
    });
    //allServices.map((elt) => {console.log(elt.length)})

    //console.log(`The lists of services are: ${allServices.SR}`)

    // console.log(`The lists of services are: ${allServices.map((srv) => srv.CLASS)}`);
    //let res = [];

    /* for(let i = 0;i<service.length;i++)
    {r
  res[i] = realm.create(SERVICE_SCHEMA,service[i]);

    console.log(`service created ** : ${res[i].TICKETID} `);
}
*/
  });
};

//Retourner tous les documents(services) stockés dans la base realm locale
export const queryAllServices = async () => {
  const realm = await Realm.open(databaseOptions);
  console.log(' ****** opened to read ****************');

  const allServices = realm.objects(SERVICE_SCHEMA);
  /* console.log(
     `The lists of services are: ${allServices.map(srv => srv.TICKETID)}`,
   );*/
  return allServices;
};

//Update
export const update = async () => {
  const realm = await Realm.open(databaseOptions);
  console.log(' ****** opened to update ****************');

  realm.write(() => {
    const allServices = realm.objects(SERVICE_SCHEMA);
    let replacement = 'JJJJJ';
    let filteredServices = allServices.filtered("CLASS == 'SR'");
    console.log('filter result length ' + filteredServices.length);
    for (let i = 0; i < filteredServices.length; i++) {
      filteredServices[i].CLASS = replacement;
    }
  });

  //display result
  await queryAllServices();
};
//upsert : update if object exists, insert otherwise
export const upsert = async () => {
  const realm = await Realm.open(databaseOptions);
  console.log(' ****** opened to upsert ****************');

  realm.write(() => {
    const allServices = realm.objects(SERVICE_SCHEMA);
    let person = realm.create(
      'Service',
      {
        rowstamp: '[0 0 0 0 0 4 58 70]',
        ASSETNUM: 'TRACK 1',
        CLASS: 'CHAAAAAAAAAAAAAAANGE',
        DESCRIPTION: 'CHAAAAAAAAAAAAAAANGE',
        HASLD: false,
        LANGCODE: 'EN',
        REPORTDATE: '2011-02-07T13:00:00-05:00',
        STATUS: 'NEW',
        TICKETID: '1158',
        TICKETUID: 313,
        ASSET: [
          {
            rowstamp: '[0 0 0 0 7 82 71 79]',
            ASSETID: 1544,
            ASSETNUM: 'TRACK 1',
            ASSETUID: 1551,
            DESCRIPTION: 'Piste 1 - Ragan-Davis',
            LOCATION: 'BASIN-W1',
            SITEID: 'BEDFORD',
          },
        ],
      },
      'modified',
    );
  });

  //display result
  await queryAllServices();
};
//delete specific documents
export const deleteFromDatabase = async () => {
  const realm = await Realm.open(databaseOptions);
  console.log(' ****** opened to delete ****************');
  realm.write(() => {
    const allServices = realm.objects('Service');

    const filteredServices = allServices.filtered("TICKETID == '1160'");
    console.log(' ****** delete complete ****************');

    realm.delete(filteredServices);
  });
};
//delete all the database
export const deleteALL = async () => {
  const realm = await Realm.open(databaseOptions);
  console.log(' ****** opened to delete ALL ****************');
  realm.write(() => {
    realm.deleteAll();
    console.log(' ****** DELETE ALL : operation completed ****************');
  });
};

//////////////////////////////////////////////////////////////
//TEST
export const test = async () => {
  const realm = await Realm.open(databaseOptions);
  console.log(' ****** opened to insert ****************');
  realm.write(() => {
    console.log(" debut d'insertion de test ");

    let a = [
      {
        street: 'napoly',
        coutry: 'Italy',
      },
      {
        street: 'jamaica',
        coutry: 'Italy',
      },
    ];
    //adress = realm.create("Address",a);
    const test = {
      typeI: 122,
      address: 'jamaice',
      country: 'usa',
    };

    JSON.stringify(a);

    let res = realm.create('Testt', test);

    console.log(`test created ** : ${res.address} `);

    /* let res2 = JSON.parse(res.address);
        console.log(`parsing ** : ${res2[1].street} `);*/
  });
};

///////////////////////////////////////////////////////////
