import React from "react";
import { View, Text } from "react-native";
import styles from "./MessageCardStyle"
import { formatDistance, parseISO } from "date-fns";
import { tr } from 'date-fns/locale'
const MessageCard = ({ message }) => {
    const formatDate = formatDistance(parseISO(message.date), new Date(), { addSuffix: true, locale: tr })
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.user}>{message.username}</Text>
                <Text style={styles.date}>{formatDate}</Text>
            </View>
            <Text style={styles.text}>{message.text}</Text>

        </View>
    )
}

export default MessageCard;