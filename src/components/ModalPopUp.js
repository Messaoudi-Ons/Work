/* eslint-disable prettier/prettier */
import React from 'react';
import { Modal, TouchableOpacity, Image, View } from 'react-native';
import { styles } from '../styles/styles';

export default function ModalPopUp({ children, props }) {

    return (
        <Modal>
            <View style={styles.modalBackGround}>
                <View style={styles.modalContainer}>
                    <View style={styles.header1}>
                        <TouchableOpacity onPress={props.handleClose}>
                            <Image
                                source={require('../assets/Icons/cancel.png')}
                                style={{ height: 30, width: 30 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.body}>
                        {children}
                    </View>
                </View>
            </View>
        </Modal>
    );
}

