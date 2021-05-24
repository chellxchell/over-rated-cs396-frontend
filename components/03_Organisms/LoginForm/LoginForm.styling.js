import { StyleSheet} from 'react-native';
import {colors} from '../../../settings/colors';

const LoginForm = StyleSheet.create({
    LoginForm:{
        height: '50%',
        width: '50%',
        backgroundColor: colors.tertiaryColor
    },
    LoginForm__title:{
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
  
  export default LoginForm;