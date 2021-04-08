/* eslint-disable prettier/prettier */

export async function GetBc() {

    let res = await fetch("http://maxgps.smartech-tn.com:9876/maxrest/rest/os/SM1421_3?_compact=1&_uw=(status='appr')&_lpwd=maxadmin&_lid=maxadmin&_format=json");

    let jsondata = await res.json();
    return jsondata.QuerySM1421_3Response.SM1421_3Set.PO;


}

