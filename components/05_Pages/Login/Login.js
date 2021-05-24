import * as React from 'react';
import { View, Text } from 'react-native';
import LoginForm from '../../03_Organisms/LoginForm/LoginForm';
import utilities from '../../../settings/utilities';

export default function SignUp() {
  return (
      <View style={[utilities.flexCenter,{height: '100%'}]}>
        <LoginForm/>
      </View>
  );
}
