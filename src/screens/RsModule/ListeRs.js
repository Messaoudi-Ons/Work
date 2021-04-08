/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Container, List, View } from 'native-base';
import { GetRs, LoadDataFromDB } from '../../services/RsService';
import RsDataItems from './RsDataItems';
import Background2 from '../../components/Background2';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { Spinner } from '../../components/Spinner';
import { Alert, StyleSheet } from 'react-native';
import { queryAllServices } from '../../database/ServiceDao';

//import DatailAsset from './DetailAsset';


export default class ListeRs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            data: null,
            setModalVisible: false,
            modalRsData: {},


        };
    }
    handleItemDataOnPress = (RsData) => {
        this.setState({
            setModalVisible: true,
            modalRsData: RsData,

        });
        console.log(this.modalRsData);
    }

    handleModalClose = () => {
        this.setState({
            setModalVisible: false,
            modalRsData: {},

        });
    }
    _keyExtractor = item => item.TICKETID;

    InsertThenLoadData = async () => {
        await queryAllServices()
            .then(res => {
                this.setState({ isLoading: false, data: res });
            }).catch(error => {
                console.log('GET ERROR' + error);
            });
    };
    componentDidMount() {
        /* GetRs().then(data => {
             console.log(data);
             this.setState({
                 isLoading: false,
                 data: data,
             });
         }).catch((err) => {
             Alert.alert('error', err);
         });*/
        this.InsertThenLoadData();
    }

    render() {
        console.log(this.state.data);
        let view = this.state.isLoading ? (
            <Background2>
                <View style={[styles.container, styles.horizontal]}>
                    <FocusAwareStatusBar barStyle="dark-content" hidden={false} backgroundColor="transparent" translucent={true} />
                    <Spinner animating={this.state.isLoading} />
                </View>
            </Background2>
        ) : (

            <Background2>
                <View style={[styles.container, styles.horizontal]}>

                    <FocusAwareStatusBar barStyle="dark-content" hidden={false} backgroundColor="transparent" translucent={true} />
                    <List keyExtractor={this._keyExtractor}
                        dataArray={this.state.data}
                        renderRow={(item) => {
                            return (
                                <RsDataItems
                                    onPress={this.handleItemDataOnPress}
                                    data={item} />
                            );
                        }}
                    />

                </View>
            </Background2>


        );


        return (
            <Container>

                {view}

            </Container>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        maxWidth: 500,
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },

});
