import React from "react"
import { TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import styles from "./FloatingButtonStyle"

const FloatingButton = ({ onPress, iconName }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >
            <Icon name={iconName} color="white" size={30} />
        </TouchableOpacity>
    )
};

export default FloatingButton;