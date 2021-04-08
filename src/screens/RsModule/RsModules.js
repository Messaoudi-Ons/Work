/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
    View,
    Animated,
} from 'react-native';
import { styles } from '../../styles/styles';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../../components/card';
import Background from '../../components/Background';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import Background2 from '../../components/Background2';

export default function RsModules({ navigation }) {
    const [cards] = useState(
        [{
            id: 1,
            title: 'Ajouter une demande de service',
            // navname: 'AddActif',
        },
        {
            id: 2,
            title: 'Afficher les demandes de services',
            navname: 'ListeRs',
        },


        ]);


    return (
        <Background2>

            <FocusAwareStatusBar barStyle="dark-content" hidden={false} backgroundColor="transparent" translucent={true} />

            <View>
                <View style={{ marginTop: 300 }}>
                    <Animated.View style={[styles.cardView]}>
                        <FlatList
                            data={cards}
                            renderItem={({ item }) => (
                                <Card
                                    title={item.title}
                                    image={require('../../assets/images/2.jpg')}
                                    navname={item.navname}
                                    onPress={() => navigation.navigate(item.navname)}
                                />
                            )}
                        />
                    </Animated.View>
                </View>
            </View>

        </Background2>
    );
}

