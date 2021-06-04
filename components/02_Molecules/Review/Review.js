import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Review.styling';
import utilities from '../../../settings/utilities';


export default function Review({ rating }) {
    const [user, setUser] = useState({})
    const url = new URL("http://localhost:8081/users/" + rating.from)

    useEffect(() => {
        async function getUser() {
            let response = await fetch(url);
            response = await response.json()
            setUser(response)
        }
        getUser()
    });
    return (
        <View style={styles.review}>
            <View style={styles.reviewInfo}>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Image
                    style={styles.review__userPicture}
                    source={{
                        uri: 'https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-512.png',
                    }} />
                <Text style={styles.review__username}>{user.name}</Text>
                </View>
                <Text>{rating.value} Stars</Text>
            </View>
            <Text>{rating.review}</Text>
        </View>
    );
}