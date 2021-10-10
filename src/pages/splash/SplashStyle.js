import { StyleSheet, Dimensions } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightskyblue"
    },
    logo: {
        height: Dimensions.get("window").height / 3,
        width: Dimensions.get("window").width / 2,
        resizeMode: "contain",
        alignSelf: "center",
        tintColor: "white"
    },
    logoContainer: {
        flex: 1,
        justifyContent: "center"
    },
})