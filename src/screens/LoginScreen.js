/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Background3 from '../components/Background3';
import Logo from '../components/Logo';

import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import ButtonComp from '../components/ButtonComp';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const onLoginPressed = () => {
    /*const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }*/
    navigation.reset({
      index: 0,
      routes: [{ name: 'ModulesScreen' }],
    });
  };

  return (
    <Background3 >
      <FocusAwareStatusBar barStyle="dark-content" hidden={false} backgroundColor="transparent" translucent={true} />
      <BackButton goBack={navigation.goBack} />
      <Logo />

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitlaize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <ButtonComp
        mode="contained"
        text="Login"
        size="small"
        onPress={onLoginPressed}
      />

    </Background3>
  );
}


