/* eslint-disable prettier/prettier */

export async function GetAsset() {

    let res = await fetch("http://maxgps.smartech-tn.com:9876/maxrest/rest/os/SM1215_5?_compact=1&_lpwd=maxadmin&_lid=maxadmin&_uw=(status='active')&_format=json");

    let jsondata = await res.json();
    return jsondata.QuerySM1215_5Response.SM1215_5Set.ASSET;


}

