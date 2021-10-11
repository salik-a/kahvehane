import { StyleSheet, Dimensions } from "react-native";
import colors from "../../assets/styles/colors";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        //alignItems: "center",
        justifyContent: "center",

    },
    title: {
        color: "white",

        fontWeight: "bold",
        fontSize: 40
    },
    titleContainer: {
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
        marginBottom: 50
    },
    buttons: {
        marginTop: 20
    }
    

})