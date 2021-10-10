import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        margin: 10,
        flexDirection: 'row',
        flex: 1,

    },
    image: {
        width: 150,
        height: 150,
        margin: 10,
        resizeMode: 'contain',
        backgroundColor: 'white'
    },
    body_container: {
        flex: 1,
        margin: 5,
        justifyContent: 'space-around'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    price: {
        textAlign: 'right',
        marginEnd: 10,
        fontSize: 16,
        fontStyle: 'italic'
    }
});