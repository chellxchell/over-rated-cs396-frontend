import { StyleSheet} from 'react-native';
import {colors} from '../../../settings/colors';

const Button = StyleSheet.create({
    button: {
        height: 50,
        width: 150,
        borderRadius: 5,
        backgroundColor: colors.primaryColor,
    },
    button__text: {
        color: 'white'
    }
  });
  
  export default Button;