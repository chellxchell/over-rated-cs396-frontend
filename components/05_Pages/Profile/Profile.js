import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Profile.styling';
import utilities from '../../../settings/utilities';
import FriendsList from '../../03_Organisms/FriendsList/FriendsList';
import Review from '../../02_Molecules/Review/Review';
import Button from '../../01_Atoms/Button/Button';
import ReviewForm from '../../03_Organisms/ReviewForm/ReviewForm';

export default function Profile({ navigation, route }) {

    const [user, setUser] = useState(route.params.user);
    const [avgRating, setAvgRating] = useState(0);
    const [ratings, setRatings] = useState([]);

    const [reviewFormVisible, setReviewFormVisible] = useState(false);

    const url = new URL("http://localhost:8081/reviews/" + user._id)

    useEffect(() => {     
        async function getReviews() {
            let response = await fetch(url);
            response = await response.json()

            setAvgRating(response["avgRating"])
            setRatings(response["reviews"])
        }
        getReviews()

    },[user]);

    return (
        <View style={styles.Profile}>
            <ReviewForm visible={reviewFormVisible} setVisible={setReviewFormVisible} toUser={user}/>

            <View style={styles.friendsListContainer}>
                <FriendsList setUser={setUser} />
            </View>

            <View style={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
                <View style={[utilities.flexCenter, styles.profileInfoContainer]}>
                    <Image
                        style={styles.profilePicture}
                        source={{
                            uri: 'https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png',
                        }} />

                    <View style={styles.profileInfo}>
                        <Text style={styles.profileInfo__name}>{user.name}</Text>
                        <Text style={styles.profileInfo__username}>@{user.username}</Text>
                        <Text style={styles.profileInfo__bio}>{user.bio || ''}</Text>
                        <Text style={styles.profileInfo__rating}>{avgRating}-Star Average Rating</Text>
                        <View style={{marginTop: 15}}>
                            <Button title="Leave A Review" onPress={() => setReviewFormVisible(true)}/>
                        </View>
                    </View>
                </View>

                <View style={styles.ratingInfoContainer}>
                    {ratings.map(rating => (
                        <Review rating={rating} />
                    ))}
                </View>
            </View>
        </View>
    );
}
