// Modules imports
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, Pressable } from "react-native";

// Styles imports
import colors from "../assets/styles/colors";

export default function Link({text, route}) {
    const navigation = useNavigation();
    return (
        <Pressable
            onPress={() => {
                navigation.navigate(route);
            }}
        >
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text: {
        color: colors.gray,
    }
})