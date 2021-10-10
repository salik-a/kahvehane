import { StyleSheet } from "react-native";
import colors from "../../assets/styles/colors";
const base_style = StyleSheet.create({
    container: {
        padding: 10,
        marginHorizontal: 40,
        marginTop: 10,
        borderRadius: 25,
        alignItems: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 17,

    },
})
export default {
    primary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: colors.buttonblue,
        },
        title: {
            ...base_style.title,
            color: "white"
        },

    }),
    secondary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: "white",
            borderColor: colors.buttonblue,
            borderWidth: 2,

        },
        title: {
            ...base_style.title,
            color: colors.buttonblue
        },

    })
}