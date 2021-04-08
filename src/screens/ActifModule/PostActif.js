/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import Background from '../../components/Background';
import ButtonComp from '../../components/ButtonComp';
import TextInput from '../../components/TextInput';
import { ActivityIndicator, Alert, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { styles } from '../../styles/styles';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';



const axios = require('axios');

export default class PostActif extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ASSETNUM: '',
            DESCRIPTION: '',
            ASSETTYPE: '',
            SERIALNUM: '',
            isLoading: false,
        };
    }

    submitHandler = async () => {
        this.setState({ isLoading: true });

        console.log(this.state);

        await axios.post('http://maxgps.smartech-tn.com:9876/maxrest/rest/os/SM1215',
            null,
            {
                params: {
                    ASSETNUM: this.state.ASSETNUM,
                    DESCRIPTION: this.state.DESCRIPTION,
                    ASSETTYPE: this.state.ASSETTYPE,
                    SERIALNUM: this.state.SERIALNUM,
                    SITEID: 'BEDFORD',
                    _format: 'json',
                    _lid: 'maxadmin',
                    _lpwd: 'maxadmin',
                    _compact: '1',

                },
            })
            .then(() => {
                this.setState({ isLoading: false });
                Alert.alert('success');

            }).catch(() => {
                this.setState({ isLoading: false });
                Alert.alert('error');
            });


    }
    render() {
        const { ASSETNUM, DESCRIPTION, ASSETTYPE, SERIALNUM } = this.state;
        return (
            <Background  >

                <FocusAwareStatusBar barStyle="dark-content" hidden={false} backgroundColor="transparent" translucent={true} />
                <TextInput
                    label="Actif *"
                    name="ASSETNUM"
                    returnKeyType="next"
                    value={ASSETNUM.value}
                    onChangeText={(ASSETNUM) => this.setState({ ASSETNUM })}
                    validators={['required', 'isNumber']}
                    errorMessages={['This field is required']}
                />

                <TextInput
                    label="Description"
                    name="DESCRIPTION"
                    value={DESCRIPTION.value}
                    onChangeText={(DESCRIPTION) => this.setState({ DESCRIPTION })} />

                <TextInput
                    label="Nserie"
                    name="SERIALNUM"
                    value={SERIALNUM.value}
                    onChangeText={(SERIALNUM) => this.setState({ SERIALNUM })} />

                <View style={styles.inputContainer2}>
                    <Picker
                        selectedValue={this.state.ASSETTYPE}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ ASSETTYPE: itemValue })}>
                        <Picker.Item label="Choisie de la liste " selected />
                        <Picker.Item label="FACILITIES : Actifs des installations" value="FACILITIES" />
                        <Picker.Item label="FLEET : Actifs du parc" value="FLEET" />
                        <Picker.Item label="FORKLIFT : Chariot élévateur" value="FORKLIFT" />
                        <Picker.Item label="GASENG : Moteur à gaz " value="GASENG" />
                        <Picker.Item label="GEN : Générateur" value="GEN" />
                        <Picker.Item label="PU2WD : Pick-up à 2 roues motrices" value="PU2WD" />
                        <Picker.Item label="PU4WD : Pick-up à 4 roues motrices" value="PU4WD" />
                        <Picker.Item label="SEDAN: Sedan" value="SEDAN" />
                        <Picker.Item label="STEPVAN : Stepvan" value="STEPVAN" />
                        <Picker.Item label="SUV: Véhicule utilitaire sport" value="SUV" />
                    </Picker>
                </View>

                <ButtonComp
                    mode="contained"
                    bordered
                    text="Submit"
                    size="small"
                    onPress={this.submitHandler}
                />

                <ActivityIndicator animating={this.state.isLoading} size="large" color="#0000ff" />
            </Background >
        );
    }
}




