import { StyleSheet} from 'react-native';
import {colors} from '../../../settings/colors';
import { View, Text } from "react-native";

const Review = StyleSheet.create({
    review: {
        backgroundColor: 'white',
        margin: 15,
        padding: 15,
        borderRadius: 5
    },
    review__userPicture:{
        height: 30,
        width: 30,
        borderRadius: 100,
        marginRight: 10
    },
    review__username:{
        fontWeight: 'bold'
    },
    reviewInfo:{
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        marginBottom: 15
    }
  });
  
  export default Review;