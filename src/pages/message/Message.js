import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import FloatingButton from "../../components/floatingButton/FloatingButton";
import ModalCard from "../../components/modalCard/ModalCard";
import styles from './MessageStyle'
import database from "@react-native-firebase/database"
import auth from "@react-native-firebase/auth"
import parseContentData from "../../assets/utils/parseContentData";
import MessageCard from "../../components/messageCard/MessageCard";
const Message = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const [contentList, setContentList] = useState([])

    useEffect(() => {
        database()
            .ref('messages/')
            .on('value', snapshot => {
                const data = snapshot.val();

                const parsedData = parseContentData(data || {})
                setContentList(parsedData)

            });
    }, [])
    function handleModalVisible() {
        setModalVisible(!modalVisible);
    }

    function handleSendContent(content) {
        sendMessage(content)
        handleModalVisible()

    }

    function sendMessage(content) {
        const usermail = auth().currentUser.email;
        const contentObj = {
            text: content,
            username: usermail.split("@")[0],
            date: new Date().toISOString(),
        }
        console.log(contentObj)
        database().ref("messages/").push(contentObj)
    }

    const renderItem = ({ item }) => <MessageCard message={item} />
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <FlatList
                    data={contentList}
                    renderItem={renderItem}
                />
            </View>
            <FloatingButton iconName="plus" onPress={handleModalVisible} />
            <ModalCard
                visible={modalVisible}
                onClose={handleModalVisible}
                onSend={handleSendContent}
            />
        </SafeAreaView>
    );
};

export default Message;

//const user = { "password": "m38rmF$", "username": "johnd" };