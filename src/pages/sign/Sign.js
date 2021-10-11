import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import styles from './SignStyle'
import Input from "../../components/input/Input"
import Button from "../../components/button/Button"
import { Formik } from "formik";
import auth from "@react-native-firebase/auth"
import ErrorMessage from "../../assets/utils/ErrorMessage";
import { showMessage } from "react-native-flash-message";

const Sign = ({ navigation }) => {
   
    const initialForm = {
        usermail: "",
        password: "",
        passwordRepeat: ""
    }
    const handleSign = async (formValues) => {
        if (formValues.password !== formValues.passwordRepeat) {
            showMessage({
                message: "Şifreler aynı değil",
                type: "danger",
            });
        } else {

            try {
                await auth().createUserWithEmailAndPassword(formValues.usermail, formValues.password);
                console.log("formValues", formValues);
                showMessage({
                    message: "Kullanıcı oluşturuldu",
                    type: "success",
                });
                navigation.navigate("Login")

            } catch (error) {
                showMessage({
                    message: ErrorMessage(error.code),
                    type: "danger",
                });
                console.log("error", error)
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Formik
                initialValues={initialForm}
                onSubmit={values => handleSign(values)}
            >

                {({ handleChange, handleSubmit, values }) => (
                    <>
                        <Input
                            placeholder="E-Postanızı Giriniz"
                            onChangeText={handleChange('usermail')}
                            value={values.usermail}
                        />
                        <Input
                            placeholder="Şifrenizi Giriniz"
                            onChangeText={handleChange('password')}
                            value={values.password}
                            isSecure={true}
                        />
                        <Input
                            placeholder="Şifrenizi  Tekrar Giriniz"
                            onChangeText={handleChange('passwordRepeat')}
                            value={values.passwordRepeat}
                            isSecure={true}
                        />
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