import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './SignUp.styling';
import SignUpForm from '../../03_Organisms/SignUpForm/SignUpForm';
import utilities from '../../../settings/utilities';

export default function SignUp({navigation}) {
  return (
    <View style={styles.SignUpContainer}>
      <View style={[styles.left, utilities.flexCenter]}>
        <Text style={styles.h1}>Over-Rated</Text>
        <Text style={styles.h2}>Welcome to Over-Rated, a place where you can tell people how you feel about them :)</Text>
      </View>
      <View style={[styles.right, utilities.flexCenter]}>
        <SignUpForm navigation={navigation}/>
      </View>
    </View>
  );
}
