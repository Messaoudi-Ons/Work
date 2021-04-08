/* eslint-disable prettier/prettier */

import {
    insertNewService,
    queryAllServices,
    insertListServices,
    deleteALL,
} from '../database/ServiceDao';

export async function GetRs() {
    let res = await fetch("http://maxgps.smartech-tn.com:9876/maxrest/rest/os/SM10?_compact=1&_uw=(status='new')&_dropnulls=1&_lpwd=maxadmin&_lid=maxadmin&_format=json");
    let jsondata = await res.json();
    return jsondata.QuerySM10Response.SM10Set.SR;
}

export async function insertData() {
    deleteALL().catch((error) => { console.log('delete ALL ERROR' + error); });
    let service = await GetRs();
    await insertNewService(service).catch(error => {
        console.log("erreur d'insertion" + error);
    });
}


