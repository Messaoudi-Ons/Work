/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { ActivityIndicator, Alert, StyleSheet } from 'react-native';
import { Container, List, View } from 'native-base';
import { GetBc } from '../../services/BcService';
import BcDataItems from './BcDataItems';
import Background2 from '../../components/Background2';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { Spinner } from '../../components/Spinner';
//import DatailAsset from './DetailAsset';


export default class ListeBc extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            data: null,
            setModalVisible: false,
            modalBcData: {},


        };
    }
    handleItemDataOnPress = (BcData) => {
        this.setState({
            setModalVisible: true,
            modalBcData: BcData,

        });
        console.log(this.modalBcData);
    }

    handleModalClose = () => {
        this.setState({
            setModalVisible: false,
            modalBcData: {},

        });
    }
    _keyExtractor = item => item.POID;

    componentDidMount() {
        GetBc().then(data => {
            console.log(data);
            this.setState({
                isLoading: false,
                data: data,

            });
        }).catch((err) => {
            Alert.alert('error', err);
        });
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
                                <BcDataItems
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
