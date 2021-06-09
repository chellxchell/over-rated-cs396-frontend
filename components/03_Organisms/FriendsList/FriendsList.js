import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import styles from './FriendsList.styling';
import { colors } from '../../../settings/colors';
import utilities from '../../../settings/utilities';
import FriendRequest from '../../02_Molecules/FriendRequest/FriendRequest';

import AppContext from '../../AppContext';

export default function FriendsList({user, setUser}) {
    // for global state (who is the current user)
    const myContext = useContext(AppContext);
    const currUser = myContext.user;

    const [friends, setFriends] = useState([]);
    const [requests, setRequests] = useState([]);

    const fake_data = [
        {
            "name": "Dwight Schrute",
            "id": "6075029f746e3f38a5f0e948"
        },
        {
            "name": "Jim Halpert",
            "id": "6075029f746e3f38a5f0e949"
        }
    ]

    useEffect(() => {
        async function getFriends() {
            let url = new URL("http://localhost:8081/users")
            let response = await fetch(url);
            response = await response.json()
            setFriends(response["users"])
        }
        getFriends()

        async function getRequests() {
            let url = new URL("http://localhost:8081/requests/" + currUser._id)
            let response = await fetch(url);
            response = await response.json()
            console.log('response',response)
            let friends_list = []
            for (var friend_id in response){
                friends_list.push(await getUser(friend_id))
            }
            console.log('requests',friends_list)
            setRequests(friends_list)
        }
        getRequests()

    }, []);
    
    async function getUser(id){
        let url = new URL("http://localhost:8081/users/" + id)
        let response = await fetch(url);
        response = await response.json()
        return response
    }
    return (
        <>
            <View style={styles.friendsHeader}>
                <Text style={styles.friendsHeader__title}>Friends</Text>
            </View>
            
            {friends.map((friend) => (
                <View style={styles.friend}>
                    <TouchableOpacity onPress={()=>setUser(friend)}>
                        <Text style={styles.friend__name}>{friend.name}</Text>
                    </TouchableOpacity>
                </View>
            ))}

            <View style={styles.friendsHeader}>
                <Text style={styles.friendsHeader__title}>Friend Requests</Text>
            </View>

            {fake_data.map((request) => (
                <FriendRequest currUser={currUser} fromUser={user}/>
                // <View style={styles.friend}>
                //     <TouchableOpacity>
                //         <Text style={styles.friend__name}>{request.name}</Text>
                //     </TouchableOpacity>
                // </View>
            ))}
        </>
    );
}