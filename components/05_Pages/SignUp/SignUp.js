import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './SignUp.styling';

export default function SignUp() {
  return (
    <View style={styles.SignUpContainer}>
      <View style={styles.left}>
        <Text style={styles.h1}>Over-Rated</Text>
        <Text style={styles.h2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      </View>
    </View>
  );
}
