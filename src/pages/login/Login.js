import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import styles from './LoginStyle'
import Input from  "../../components/input/Input"
import Button from "../../components/button/Button"


const Login = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Input placeholder="E-Postanızı Giriniz" />
            <Input placeholder="Şifrenizi Giriniz" />
            <Button text="Giriş Yap" theme="primary" />
            <Button text="Kayıt Ol" theme="secondary" />
        </SafeAreaView>
    );
};

export default Login;

//const user = { "password": "m38rmF$", "username": "johnd" };