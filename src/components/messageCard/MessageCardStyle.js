import { StyleSheet } from "react-native";
import colors from "../../assets/styles/colors";

export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        margin: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 15,
        //flex: 1
    },
    innerContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 5
    },
    user: {
        color: "blue",
        fontWeight: "bold"
    },
    date: {
        color: "black",
        fontSize: 12,
        fontStyle: "italic"
    },
    text: {
        color: "black",
        fontSize: 16
    }
})