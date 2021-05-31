import { StyleSheet} from 'react-native';
import {colors} from '../../../settings/colors';

const FriendsList = StyleSheet.create({
    friendsHeader: {
        height: 50,
        width: '100%',
        backgroundColor: colors.secondaryColor,
        display: 'flex',
        justifyContent: 'center'
    },
    friendsHeader__title:{
        fontWeight: 'bold',
        fontSize: 28,
        color: 'white',
        paddingLeft: 10
    },
    friend: {
        height: 35,
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        padding: 10,
        border: '1px solid lightgray'
    },
  });
  
  export default FriendsList;