import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import styles from './LoginStyle'
import Input from "../../components/input/Input"
import Button from "../../components/button/Button"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Formik } from "formik";
import auth from "@react-native-firebase/auth"
import ErrorMessage from "../../assets/utils/ErrorMessage";
import { showMessage } from "react-native-flash-message";


const Login = ({ navigation }) => {

    const [loading, setLoading] = useState(false);
    const initialForm = {
        usermail: "",
        password: ""
    }

    const handleLogin = async (formValues) => {
        try {
            setLoading(true)
            await auth().signInWithEmailAndPassword(formValues.usermail, formValues.password)
            console.log(formValues)
            setLoading(false)
            showMessage({
                message: "Giriş Başarılı",
                type: "success",
            });
            navigation.navigate("Message")
        } catch (error) {
            console.log(error)
            showMessage({
                message: ErrorMessage(error.code),
                type: "danger",
            });

        }
        setLoading(false)
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
                        <View style={styles.buttons}>
                            <Button text="Giriş Yap" theme="primary" onPress={handleSubmit} loading={loading} />
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