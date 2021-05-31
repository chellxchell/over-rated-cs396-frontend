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
        backgroundColor: colors.tertiaryColor,
        height: '40%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    profileInfo__name:{
        fontWeight: 'bold',
        fontSize: 32
    },
    profileInfo__username:{
        fontWeight: 'bold',
        fontSize: 16,
        color: 'gray',
        marginBottom: 10
    },
    profilePicture: {
        height: 200,
        width: 200,
    },

    ratingInfoContainer:{
        height: '100%'
    }
  });
  
  export default Profile;