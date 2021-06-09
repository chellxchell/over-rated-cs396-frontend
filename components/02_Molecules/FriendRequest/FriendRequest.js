import React from 'react';
import { TouchableOpacity, Text} from "react-native";
import styles from './FriendRequest.styling';
import utilities from '../../../settings/utilities';

import { mdiCheck, mdiClose } from '@mdi/js';

export default function FriendRequest({currUser, fromUser}) {

    return (
        <TouchableOpacity styles={styles.friendRequest}>
            <Text style={styles.friendRequest__name}>{fromUser.name}</Text>
            <CheckIcon/>
            <ClearIcon/>
        </TouchableOpacity>
    );
}