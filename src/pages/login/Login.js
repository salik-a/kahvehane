import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import styles from './LoginStyle'
import Input from "../../components/input/Input"
import Button from "../../components/button/Button"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Formik } from "formik";

const Login = ({ navigation }) => {

    const initialForm = {
        usermail: "",
        password: ""
    }

    const handleLogin = (formValues) => {
        console.log(formValues)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Icon name={"tea"} size={150} color={"white"} />
                <Text style={styles.title}>KAHVEHANE</Text>
            </View>
            <Formik
                initialValues={initialForm}
                onSubmit={values => handleLogin(values)}
            >
                {({ handleSubmit, values, handleChange }) => (
                    <View>
                        <Input placeholder="E-Postanızı Giriniz" onChangeText={handleChange('usermail')} value={values.usermail} />
                        <Input placeholder="Şifrenizi Giriniz" onChangeText={handleChange('password')} value={values.password} />
                        <View style={styles.buttons}>
                            <Button text="Giriş Yap" theme="primary" onPress={handleSubmit} />
                            <Button text="Kayıt Ol" theme="secondary" onPress={() => navigation.navigate("Sign")} />
                        </View>
                    </View>
                )}
            </Formik>




        </SafeAreaView>
    );
};

export default Login;

//const user = { "password": "m38rmF$", "username": "johnd" };