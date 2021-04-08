/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, List, View } from 'native-base';
import { GetAsset } from '../../services/AssetService';
import AssetDataItems from './AssetDataItems';
import Background2 from '../../components/Background2';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import DatailAsset from './DetailAsset';
import { styles } from '../../styles/styles';
import { Spinner } from '../../components/Spinner';


export default class ListeActif extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            data: [],
            setModalVisible: false,
            modalAssetData: {},
        };
    }
    _keyExtractor(index) {
        return index.toString();
    }
    handleClose = () => {
        return this.props.onClose();
    }
    handleItemDataOnPress = (AssetData) => {
        this.setState({
            setModalVisible: true,
            modalAssetData: AssetData,
        });
        console.log(this.modalAssetData);
    }
    componentDidMount() {
        GetAsset().then(data => {
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
                    <List keyExtractor={(item, index) => index.toString()}
                        dataArray={this.state.data}
                        renderRow={(item) => {
                            return (
                                <AssetDataItems
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
                <DatailAsset
                    showModal={this.state.setModalVisible}
                    AssetData={this.state.modalAssetData}
                    onClose={this.handleModalClose} />
            </Container>
        );
    }
}
