/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import Background from '../../components/Background';
import { Input } from 'react-native-elements';
import { View, Alert } from 'react-native';
import Header from '../../components/Header';
import ButtonComp from '../../components/ButtonComp';
import Icon from 'react-native-vector-icons/FontAwesome';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { styles } from '../../styles/styles';
const axios = require('axios');

export default class BcPost extends Component {

    constructor(props) {

        super(props);
        this.state = {
            WONUM: '',
            FINISHTIME: '',
            STARTTIME: '',
            LABORCODE: '',
            STARTDATE: '',
            FINISHDATE: '',
            ischeked: false,
        };
    }
    submit = e => {
        e.preventDefault();
        var that = this;
        axios.post('http://maxgps.smartech-tn.com:9876/maxrest/rest/os/MXEMPACT',
            null,
            {
                params: {
                    FINISHTIME: this.state.FINISHTIME,
                    STARTTIME: this.state.STARTTIME,
                    STARTDATE: this.state.STARTDATE,
                    FINISHDATE: this.state.FINISHDATE,
                    LABORCODE: this.state.LABORCODE,
                    WONUM: this.state.WONUM,
                    SITEID: 'BEDFORD',
                    _format: 'json',
                    _lid: 'maxadmin',
                    _lpwd: 'maxadmin',
                },
            }).then(function (result) {
                // console.log(result);
                console.log('here');
                if (!result.error) {
                    that.setState({
                        status: result.error,
                        wholeResult: result,
                    });
                    Alert.alert('User register successfully ');
                    console.log(that.state.wholeResult);
                } else {
                    Alert.alert(JSON.stringify(result));
                    console.log(result);
                }
            }).catch(function (error) {
                console.log('-------- error ------- ' + error);
                Alert.alert('result:' + error);
            });
    }
    handleClick = () => {
        this.setState({ ischeked: true });
        console.log(this.state);
    }
    render() {

        const { WONUM, STARTDATE, STARTTIME, FINISHDATE, FINISHTIME, LABORCODE, ischeked } = this.state;

        return (
            <Background  >
                < FocusAwareStatusBar barStyle="dark-content" hidden={false} backgroundColor="transparent" translucent={true} />

                <View style={{ width: '100%' }}>
                    <Header title="Labor Reporting" />
                </View>
                <Input name="WONUM" onChangeText={(WONUM) => this.setState({ WONUM })} value={WONUM.value}
                    type="text"
                    placeholder="WONUM"
                    rightIcon={

                        < Icon name="qrcode" size={24} color="black" />
                    } />

                <Input name="LABORCODE" onChangeText={(LABORCODE) => this.setState({ LABORCODE })} value={LABORCODE.value}
                    type="text"
                    placeholder="LABORCODE"
                    rightIcon={

                        < Icon name="qrcode" size={24} color="black" />
                    } />

                <ButtonComp
                    mode="contained"
                    text="Show configurations"
                    size="large"
                    onPress={this.handleClick}
                />


                {this.state.ischeked ?
                    (
                        <View >
                            <View style={styles.viewContainer1}>
                                <View style={{ width: 200 }}>
                                    <Input name="STARTDATE" onChangeText={(STARTDATE) => this.setState({ STARTDATE })} value={STARTDATE.value} type="text"
                                        placeholder="Start Date"
                                        rightIcon={

                                            < Icon name="calendar" size={20} color="black" />
                                        }
                                    />

                                </View>
                                <View style={{ width: 200 }}>
                                    <Input name="FINISHDATE" onChangeText={(FINISHDATE) => this.setState({ FINISHDATE })} value={FINISHDATE.value} type="text"
                                        placeholder="End Date"
                                        rightIcon={

                                            < Icon name="calendar" size={20} color="black" />
                                        }

                                    />
                                </View>

                            </View>
                            <View style={styles.viewContainer1}>
                                <View style={{ width: 200 }}>
                                    <Input
                                        name="STARTTIME" onChangeText={(STARTTIME) => this.setState({ STARTTIME })} value={STARTTIME.value}
                                        type="time" placeholder="Start Time"
                                        rightIcon={

                                            < Icon name="calendar" size={20} color="black" />
                                        }
                                    />
                                </View>
                                <View style={{ width: 200 }}>
                                    <Input name="FINISHTIME" onChangeText={(FINISHTIME) => this.setState({ FINISHTIME })} value={FINISHTIME.value}
                                        type="time"
                                        placeholder="End Time"
                                        rightIcon={
                                            < Icon name="calendar" size={20} color="black" />
                                        } />
                                </View>
                            </View>

                        </View>

                    )
                    : null}
                <ButtonComp
                    mode="contained"
                    text="Submit"
                    size="small"

                    onPress={this.submit}
                />


            </Background>

        );
    }
}
