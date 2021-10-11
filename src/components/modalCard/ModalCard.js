import React from "react";
import { View, TextInput } from "react-native"
import styles from "./ModalCardStyle"
import Button from "../button/Button"
import Modal from "react-native-modal"

const ModalCard = ({ visible, onClose, onSend }) => {
    const [text, setText] = React.useState(null)
    function handleSend() {
        if (!text) {
            return
        }
        onSend(text);
        setText(null);
    }
    return (
        <Modal
            style={styles.modal}
            isVisible={visible}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
            swipeDirection="down"
        >
            <View style={styles.container}>
                <View style={styles.input}>
                    <TextInput
                        placeholder="Bir şeyler söyle..."
                        onChangeText={setText}
                        multiline
                    />
                </View>
                <Button text="Gönder" onPress={handleSend} />
            </View>
        </Modal>
    )
};

export default ModalCard;