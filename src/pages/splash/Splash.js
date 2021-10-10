import React from "react";
import { View, Text, SafeAreaView, Image, Alert } from "react-native";
import styles from './SplashStyle'


const Splash = () => {


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../../assets/shopping.png")} />
            </View>

        </SafeAreaView>
    );
};

export default Splash;

