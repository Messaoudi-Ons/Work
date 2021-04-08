/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Modal, TouchableOpacity, Image, Text, View } from 'react-native';
import { styles } from '../../styles/styles';

export default class CompteurDetail extends Component {

    constructor(props) {
        super(props);
    }

    handleClose = () => {
        return this.props.onClose();
    }

    render() {
        const { showModal, CompteurData } = this.props;
        console.log(this.props);
        return (
            <Modal
                animationType="slide"
                transparent
                visible={showModal}
            >

                <View style={styles.modalBackGround}>
                    <View style={styles.modalContainer}>
                        <View style={styles.header1}>
                            <TouchableOpacity onPress={this.handleClose}>
                                <Image
                                    source={require('../../assets/Icons/cancel.png')}
                                    style={styles.img}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.body}>
                            {CompteurData.ASSETMETER ?
                                <View>
                                    <Text style={styles.TextView}> METER NAME : {CompteurData.ASSETMETER[0].METERNAME}</Text>
                                    <Text style={styles.TextView}> READING TYPE : {CompteurData.ASSETMETER[0].READINGTYPE}</Text>
                                    <Text style={styles.TextView}> Meter Type :  {CompteurData.ASSETMETER[0].METER[0].METERTYPE}</Text>

                                </View>
                                : null}
                        </View>
                    </View>
                </View>
            </Modal >
        );
    }
}



