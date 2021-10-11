import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import FloatingButton from "../../components/floatingButton/FloatingButton";
import ModalCard from "../../components/modalCard/ModalCard";
import styles from './MessageStyle'


const Message = () => {

    const [modalVisible, setModalVisible] = useState(false)

    function handleModalVisible() {
        setModalVisible(!modalVisible);
    }

    function handleSendContent(content) {
        console.log(content)
        handleModalVisible()
    }
    return (
        <SafeAreaView style={styles.container}>
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