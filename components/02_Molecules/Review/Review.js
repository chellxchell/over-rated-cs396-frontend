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
                        uri: 'https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png',
                    }} />
                <Text style={styles.review__username}>{user.name}</Text>
                </View>
                <Text>{rating.value} Stars</Text>
            </View>
            <Text>{rating.review}</Text>
        </View>
    );
}