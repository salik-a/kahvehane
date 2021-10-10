import { StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    container: {
        padding: 10,
        marginHorizontal: 40,
        marginTop: 20,
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
            backgroundColor: "#2286c3",
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
            borderColor: "#2286c3",
            borderWidth: 2,

        },
        title: {
            ...base_style.title,
            color: "#2286c3"
        },

    })
}