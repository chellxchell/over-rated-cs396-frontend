import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Profile.styling';
import utilities from '../../../settings/utilities';

export default function Profile({ navigation, route }) {
    let user = route.params.user
    return (
        <View style={styles.Profile}>
            <View style={styles.friendsListContainer}>
                <Text>Friends go here (next checkpoint)</Text>
            </View>
            <View style={[styles.profileInfoContainer, utilities.flexCenter]}>
                <Image
                    style={styles.profilePicture}
                    source={{
                        uri: 'https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png',
                    }} />
                <View style={styles.profileInfo}>
                    <Text style={styles.profileInfo__username}>Username: {user.username}</Text>
                    <Text style={styles.profileInfo__name}>Name: {user.name}</Text>

                </View>
            </View>
        </View>
    );
}
