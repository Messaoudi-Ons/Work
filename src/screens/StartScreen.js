/* eslint-disable prettier/prettier */
import React from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import ButtonComp from '../components/ButtonComp';
import Background3 from '../components/Background3';

export default function StartScreen({ navigation }) {

  return (
    <Background3>
      < FocusAwareStatusBar barStyle="dark-content" hidden={false} backgroundColor="transparent" translucent={true} />
      <Logo />
      <Paragraph>
        Welcome to our application.
      </Paragraph>

      <ButtonComp
        mode="contained"
        text="WELCOME"
        size="small"
        onPress={() => navigation.navigate('LoginScreen')}
      />
    </Background3>
  );
}
