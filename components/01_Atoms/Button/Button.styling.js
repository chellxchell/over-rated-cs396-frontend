import { StyleSheet} from 'react-native';
import {colors} from '../../../settings/colors';

const Button = StyleSheet.create({
    button: {
        height: 50,
        width: 150,
        borderRadius: 5,
        backgroundColor: colors.primaryColor,
        margin: 10
    },
    button_secondary: {
        height: 40,
        width: 130,
        borderRadius: 5,
        borderColor: colors.primaryColor,
        borderWidth: 1,
        backgroundColor: 'transparent',
    },

    button__text: {
        color: 'white'
    },
    button__text_secondary:{
        color: colors.primaryColor
    }
  });
  
  export default Button;