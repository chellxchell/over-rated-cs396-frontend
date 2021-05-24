import { StyleSheet} from 'react-native';
import {colors} from '../../../settings/colors';

const SignUp = StyleSheet.create({
    SignUpContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row'
    },
    left: {
        height: '100%',
        width: '50%',
        backgroundColor: colors.secondaryColor,
        padding: '10%'
    },
    right: {
        width: '50%'
    },

    h1: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '75px'
    },
    h2: {
        color: 'white',
        fontSize: '25px'
    }

  });
  
  export default SignUp;