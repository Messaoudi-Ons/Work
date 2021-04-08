/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image } from 'react-native';
import { styles } from '../styles/styles';
import ImageButton from '../components/ImageButton';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import Background2 from '../components/Background2';



export default function ModulesScreen({ navigation }) {
  return (
    <Background2>

      <FocusAwareStatusBar barStyle="dark-content" hidden={false} backgroundColor="transparent" translucent={true} />

      <View style={{ alignItems: 'center' }}>
        <View style={styles.imageContainer}>
          <View style={styles.imageView}>
            <Image
              source={require('../assets/images/1.jpg')}
              style={styles.image}
            />
            <ImageButton
              onPress={() => navigation.navigate('AssetModule')}
              title="Actifs Module"
            />
          </View>
          <View style={styles.imageView}>
            <Image
              source={require('../assets/images/2.jpg')}
              style={styles.image}
            />
            <ImageButton
              onPress={() => navigation.navigate('RsModules')}
              title="Demande de service" />
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imageView}>
            <Image
              source={require('../assets/images/3.jpg')}
              style={styles.image}
            />
            <ImageButton
              onPress={() => navigation.navigate('BcModules')}
              title="Bons de commande"
            />
          </View>
          <View style={styles.imageView}>
            <Image
              source={require('../assets/images/4.jpg')}
              style={styles.image}
            />
            <ImageButton title="Rapport main-d'oeuvre" />
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imageView}>
            <Image
              source={require('../assets/images/5.jpg')}
              style={styles.image}
            />
            <ImageButton
              onPress={() => navigation.navigate('Luxury')}
              title="Interventions"
            />
          </View>
          <View style={styles.imageView}>
            <Image
              source={require('../assets/images/6.jpg')}
              style={styles.image}
            />
            <ImageButton title="Gestion de stocks" />
          </View>
        </View>
      </View>
    </Background2>

  );
}

