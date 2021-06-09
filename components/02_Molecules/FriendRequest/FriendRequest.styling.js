import { StyleSheet} from 'react-native';
import {colors} from '../../../settings/colors';

const FriendRequest = StyleSheet.create({
    friendRequest: {
        height: 35,
        width: '100%',
        padding: 10,
        border: '1px solid lightgray',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    friendRequest__icons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
  });
  
  export default FriendRequest;