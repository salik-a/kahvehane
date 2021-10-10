import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import styles from './SignStyle'
import Input from "../../components/input/Input"
import Button from "../../components/button/Button"
import { Formik } from "formik";


const Sign = ({ navigation }) => {
   
    const initialForm = {
        usermail: "",
        password: "",
        passwordRepeat: ""
    }
    const handleSign = (formValues) => {
        console.log(formValues)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Formik
                initialValues={initialForm}
                onSubmit={values => handleSign(values)}
            >

                {({ handleChange, handleSubmit, values }) => (
                    <>
                        <Input placeholder="E-Postanızı Giriniz" onChangeText={handleChange('usermail')} value={values.usermail} />
                        <Input placeholder="Şifrenizi Giriniz" onChangeText={handleChange('password')} value={values.password} />
                        <Input placeholder="Şifrenizi  Tekrar Giriniz" onChangeText={handleChange('passwordRepeat')} value={values.passwordRepeat} />
                        <View style={styles.buttons}>
                            <Button text="Kayıt Ol" theme="primary" onPress={handleSubmit} />
                            <Button text="Geri" theme="secondary" onPress={() => navigation.goBack()} />
                        </View>
                    </>
                )

                }
            </Formik>

        </SafeAreaView>
    );
};

export default Sign;

//const user = { "password": "m38rmF$", "username": "johnd" };