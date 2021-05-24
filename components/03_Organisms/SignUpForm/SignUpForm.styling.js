import { StyleSheet} from 'react-native';
import {colors} from '../../../settings/colors';

const SignUpForm = StyleSheet.create({
    SignUpForm:{
        height: '80%',
        width: '80%',
        backgroundColor: colors.tertiaryColor
    },
    SignUpForm__title:{
        fontSize: 32
    },
    input: {
        height: 40,
        width: '80%',
        margin: 12,
        border: '1px solid gray',
        borderRadius: 5,
        paddingLeft: 10
    },
    alertMessage: {
        color: 'red'
    }
  });
  
  export default SignUpForm;