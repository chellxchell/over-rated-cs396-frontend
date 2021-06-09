import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Profile.styling';
import utilities from '../../../settings/utilities';
import FriendsList from '../../03_Organisms/FriendsList/FriendsList';
import Review from '../../02_Molecules/Review/Review';
import Button from '../../01_Atoms/Button/Button';
import ReviewForm from '../../03_Organisms/ReviewForm/ReviewForm';

import AppContext from '../../AppContext';

export default function Profile({ navigation, route }) {
    // for global state (who is the current user)
    const myContext = useContext(AppContext);
    const currUser = myContext.user;

    const [user, setUser] = useState(route.params.user);
    const [avgRating, setAvgRating] = useState(0);
    const [ratings, setRatings] = useState([]);
    const [friendReqSent, setFriendReqSent] = useState(false);

    const [reviewFormVisible, setReviewFormVisible] = useState(false);


    useEffect(() => {     
        async function getReviews() {
            let url = new URL("http://localhost:8081/reviews/" + user._id)
            let response = await fetch(url);
            response = await response.json()

            setAvgRating(response["avgRating"])
            setRatings(response["reviews"])
        }
        getReviews()

    },[user]);

    function sendFriendRequest(){
        let url = new URL("http://localhost:8081/requests/" + currUser._id)
        let data = {
            "to" : user._id
        };

    fetch(url, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        console.log(response)
        if (!response.ok) {
            setAlertMessage('Something went wrong')
        } else {
            return response.json();
        }
    })
    .then(data => {
        console.log('Success:', data);
        setFriendReqSent(true);
    })
    }
    return (
        <View style={styles.Profile}>
            <ReviewForm visible={reviewFormVisible} setVisible={setReviewFormVisible} toUser={user}/>

            <View style={styles.friendsListContainer}>
                <FriendsList user={user} setUser={setUser} />
            </View>

            <View style={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
                <View style={[utilities.flexCenter, styles.profileInfoContainer]}>
                    <Image
                        style={styles.profilePicture}
                        source={{
                            uri: 'https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-512.png',
                        }} />

                    <View style={styles.profileInfo}>
                        <Text style={styles.profileInfo__name}>{user.name}</Text>
                        <Text style={styles.profileInfo__username}>@{user.username}</Text>
                        <Text style={styles.profileInfo__bio}>{user.bio || ''}</Text>
                        <Text style={styles.profileInfo__rating}>{avgRating}-Star Average Rating</Text>
                        {
                            currUser._id != user._id ? 
                            <View style={styles.buttonContainer}>
                                <Button title="Leave A Review" onPress={() => setReviewFormVisible(true)}/>
                                <Button title={friendReqSent ? "Friend Request Sent" : "Send Friend Request"} onPress={() => sendFriendRequest()}/>
                            </View>
                            :
                            null
                        }
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
