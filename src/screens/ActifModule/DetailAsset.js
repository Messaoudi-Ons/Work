/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import { Modal, TouchableOpacity, Image, Text, View } from 'react-native';
import { styles } from '../../styles/styles';
import CompteurDetail from './CompteurDetail';
export default class DetailAsset extends Component {

    constructor(props) {
        super(props);
        this.state = {
            setModalVisible: false,
            ModalDataCompteur: {},
        };
    }

    handleClose = () => {
        return this.props.onClose();
    }

    handleItemDataOnPress = () => {
        this.setState({
            setModalVisible: true,
            ModalDataCompteur: this.props.AssetData,
        });
    }
    handleModalClose = () => {
        this.setState({
            setModalVisible: false,
            ModalDataCompteur: {},

        });
    }

    render() {
        const { showModal, AssetData } = this.props;
        console.log(this.props.AssetData);
        return (
            <Modal
                animationType="slide"
                transparent
                visible={showModal}
            >
                <View style={styles.modalBackGround}>
                    <View style={styles.modalContainer}>
                        <View style={styles.header1}>
                            <TouchableOpacity onPress={this.handleModalClose}>
                                <Image
                                    source={require('../../assets/Icons/cancel.png')}
                                    style={styles.img}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.body}>
                            <View>
                                <Text style={styles.textTitle}>Asset ID :  {AssetData.ASSETID} </Text>
                            </View>
                            {AssetData.DESCRIPTION ?
                                <View >
                                    <Text style={styles.TextView}>DESCRIPTION :  {AssetData.DESCRIPTION}</Text>
                                </View>
                                : null}
                            {AssetData.SITEID ?
                                <View >
                                    <Text style={styles.TextView}>SITE : {AssetData.SITEID} </Text>
                                </View>
                                : null}
                            {AssetData.STATUS ?
                                <View >
                                    <Text style={styles.TextView}>STATUT : {AssetData.STATUS}</Text>
                                </View>
                                : null}
                            {AssetData.ORGID ?
                                <View >
                                    <Text style={styles.TextView}>EMPLACEMENT :  {AssetData.ORGID}</Text>
                                </View>
                                : null}
                            {AssetData.LOCATIONS ?
                                <View >
                                    <Text style={styles.TextView}>TYPE :  {AssetData.LOCATIONS[0].TYPE}</Text>
                                </View>
                                : null}
                            {AssetData.SITEID ?
                                <View >
                                    <Text style={styles.TextView}>N° DE Serie :  {AssetData.SITEID}</Text>
                                </View>
                                : null}
                            {AssetData.TESTDATE ?
                                <View >
                                    <Text style={styles.TextView}>Date D'Instal : {AssetData.TESTDATE} </Text>
                                </View>
                                : null}
                            {AssetData.MANUFACTURER ?
                                <View >
                                    <Text style={styles.TextView}>FABRIQUANT :{AssetData.MANUFACTURER}   </Text>
                                </View>
                                : null}
                            {AssetData.DOCLINKS ?
                                <View >
                                    <Text style={styles.textTouch}>Piéces Jointes : {AssetData.DOCLINKS.length} </Text>
                                    <TouchableOpacity style={{ alignItems: 'flex-end' }} onPress={this.handleItemDataOnPress}>
                                        <Image
                                            source={require('../../assets/Icons/next.png')}
                                            style={styles.img1}
                                        />
                                    </TouchableOpacity>
                                </View>
                                : null}
                            {AssetData.ASSETMETER ?
                                <View >
                                    <Text style={styles.textTouch}>Compteur de l'actif : {AssetData.ASSETMETER.length}</Text>
                                    <TouchableOpacity style={{ alignItems: 'flex-end' }} onPress={this.handleItemDataOnPress}>
                                        <Image
                                            source={require('../../assets/Icons/next.png')}
                                            style={styles.img1}
                                        />
                                    </TouchableOpacity>
                                </View>
                                : null}
                        </View>
                    </View>
                </View >
                <CompteurDetail
                    showModal={this.state.setModalVisible}
                    onClose={this.handleModalClose}
                    CompteurData={this.state.ModalDataCompteur}
                />
            </Modal >
        );
    }
}
