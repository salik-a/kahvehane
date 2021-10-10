import React from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './InputStyle'

const Input = ({ placeholder, onChangeText, value, iconName, isSecure }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={isSecure}
            />
            <Icon name={iconName} size={24} color={"gray"} />
        </SafeAreaView>
    );
};

export default Input;