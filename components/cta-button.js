import { View, StyleSheet, Text, Pressable } from "react-native";
import colors from "../assets/styles/colors";

export default function CtaButton({text, action}) {
    return (
        <Pressable style={styles.button} onPress={action}>
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        borderColor: colors.pink,
        padding: 20,
        borderRadius: 40,
        alignItems: "center",
        marginVertical: 20,
        marginHorizontal: 80,
    },
    buttonText: {
        fontSize: 20,
        color: colors.gray,
    }
})