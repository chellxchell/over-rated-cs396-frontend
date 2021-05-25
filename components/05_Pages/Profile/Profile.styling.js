import { StyleSheet} from 'react-native';
import {colors} from '../../../settings/colors';

const Profile = StyleSheet.create({
    Profile: {
        display: 'flex',
        flexDirection: 'row'
    },
    friendsListContainer: {
        backgroundColor: colors.secondaryColor,
        height: '100vh',
        width: '30%'
    },

    profileInfoContainer: {
        width: '70%'
    },
    profilePicture: {
        height: 200,
        width: 200,
    }
  });
  
  export default Profile;