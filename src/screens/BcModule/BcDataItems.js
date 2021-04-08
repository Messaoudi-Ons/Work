/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
    ListItem,
    Thumbnail,
    Text,
    Left,
    Body,
    Right,
    Button,
} from 'native-base';

export default class BcDataItems extends Component {

    constructor(props) {
        super(props);
        this.data = props.data;
    }

    /*  handlePress = () => {
          const { ASSETID, SITEID, STATUS, LOCATIONS, TESTDATE, MANUFACTURER, ASSETNUM, ASSETUID, ASSETMETER, DESCRIPTION, ORGID, DOCLINKS } = this.data;
          this.props.onPress({ ASSETID, SITEID, TESTDATE, MANUFACTURER, LOCATIONS, STATUS, ASSETNUM, ASSETUID, ASSETMETER, DESCRIPTION, ORGID, DOCLINKS });
      }*/


    render() {
        return (

            <ListItem thumbnail >

                <Left>
                    <Thumbnail
                        square
                        source={{
                            uri:
                                this.data.urlToImage != null
                                    ? this.data.urlToImage
                                    : 'https://cdn4.iconfinder.com/data/icons/delivery-1-1/512/check_clipboard-512.png',
                        }}
                    />
                </Left>
                <Body>

                    <Text>{this.data.POID}</Text>
                    <Text note >{this.data.DESCRIPTION}</Text>


                </Body>
                <Right>
                    <Button rounded primary onPress={this.handlePress}>
                        <Text>View</Text>
                    </Button>
                </Right>
            </ListItem>


        );
    }

}


