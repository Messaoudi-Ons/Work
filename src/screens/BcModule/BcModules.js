/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
    View,
    Animated,
} from 'react-native';
import { styles } from '../../styles/styles';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../../components/card';
import Background2 from '../../components/Background2';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';


export default function BcModules({ navigation }) {
    const [cards] = useState(
        [{
            id: 1,
            title: 'Afficher les Bons de Commande',
            navname: 'ListeBc',
        },
        {
            id: 2,
            title: 'Ajouter Bon de Commande',
            navname: 'BcPost',
        },
        {
            id: 3,
            title: 'Réceptionner articles',
            // navname: 'ListActif',
        },
        {
            id: 4,
            title: 'Réceptionner services',
            // navname: 'RelCom',
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
                                    image={require('../../assets/images/3.jpg')}
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

