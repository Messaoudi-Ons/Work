/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
    insertNewService,
    queryAllServices,
    insertListServices,
    deleteALL,
} from './ServiceDao';

import { SafeAreaView, FlatList, View } from 'react-native';

import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import Item from './Item';


export default class ListDb extends Component {
    service1 = {
        rowstamp: '[0 0 0 0 0 4 57 -3]',
        CLASS: 'SR',
        DESCRIPTION: 'Email seems down.',
        HASLD: true,
        LANGCODE: 'EN',
        REPORTDATE: '2004-08-16T14:31:22-04:00',
        REPORTEDPRIORITY: 1,
        STATUS: 'NEW',
        TICKETID: '2305',
        TICKETUID: 35,
    };
    service2 = {
        rowstamp: '[0 0 0 0 26 -84 23 -48]',
        CLASS: 'SR',
        DESCRIPTION:
            'I was able to open my email this morning, but it is not working right now.',
        HASLD: true,
        LANGCODE: 'EN',
        REPORTDATE: '2004-08-16T14:36:23-04:00',
        REPORTEDPRIORITY: 1,
        STATUS: 'NEW',
        TICKETID: '2306',
        TICKETUID: 36,
    };
    service3 = {
        rowstamp: '[0 0 0 0 26 -84 23 -48]',
        CLASS: 'SR',
        DESCRIPTION:
            'I was able to open my email this morning, but it is not working right now.',
        HASLD: true,
        LANGCODE: 'EN',
        REPORTDATE: '2004-08-16T14:36:23-04:00',
        REPORTEDPRIORITY: 1,
        STATUS: 'NEW',
        TICKETID: '2307',
        TICKETUID: 36,
    };
    service = [this.service1, this.service2, this.service3];

    constructor(props) {
        super(props);
        this.state = {
            services: [],
        };
    }
    //API call
    async apiCall() {
        let resp = await fetch(
            "http://maxgps.smartech-tn.com:9876/maxrest/rest/os/SM10?_compact=1&_uw=(status='new')&_dropnulls=1&_lpwd=maxadmin&_lid=maxadmin&_format=json",
        );
        let respJson = await resp.json();
        return respJson.QuerySM10Response.SM10Set.SR;
    }
    //insert data from api
    insertData = async () => {
        let service = await this.apiCall();
        await insertNewService(service).catch(error => {
            console.log("erreur d'insertion" + error);
        });
    };

    //insert data then display it
    InsertThenLoadData = async () => {
        await this.insertData();

        const res = await queryAllServices().catch(error => {
            console.log('GET ERROR' + error);
        });
        this.setState({ services: res });
        //console.log("state " + res[0].TICKETID) ;
    };
    //Insert list of services
    InsertServices = async () => {
        let service = await this.apiCall();

        await insertListServices(service).catch(error => {
            console.log("erreur d'insertion" + error);
        });

        //console.log("state " + res[0].TICKETID) ;
    };

    //get data from local database
    loadData = async () => {
        const res = await queryAllServices().catch(error => {
            console.log('GET ERROR' + error);
        });
        this.setState({ services: res });
        //console.log("state " + res[0].TICKETID) ;
    };

    componentDidMount() {
        //this.insertData();
        //this.InsertThenLoadData();
        //this.InsertServices();
        //this.loadData();
        //update().catch((error)=>{console.log("UPDATE ERROR " + error);})
        //deleteFromDatabase().catch((error)=>{console.log("DELETE ERROR" + error);});
        //test().catch((error)=>{console.log("test ERROR" + error); });
        deleteALL().catch((error) => { console.log('delete ALL ERROR' + error); });
        //upsert().then(()=> console.log("upsert DONE")).catch((error)=>{console.log("delete ALL ERROR" + error); });
        //observeService().catch((error)=>{console.log("error in listener" + error); });
    }

    render() {
        return (

            <View >
                <FocusAwareStatusBar
                    barStyle="dark-content"
                    hidden={false}
                    backgroundColor="transparent"
                    translucent={true}
                />
                <SafeAreaView>
                    <FlatList
                        keyExtractor={item => item.TICKETID}
                        data={this.state.services}
                        renderItem={({ item }) => <Item item={item} />}
                    />
                </SafeAreaView>
            </View>

        );
    }
}
