// Modules imports
import { Text, Pressable, StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";
import { Entypo } from '@expo/vector-icons';

// Styles imports
import colors from "../assets/styles/colors";

export default function Input({placeholder, secureEntry, textArea, input, setInput}) {
    const [hidePassword, setHidePassword] = useState(true);
    
    return (
        <View style={styles.inputGroup}>
            <TextInput
                secureTextEntry={(secureEntry && hidePassword) ? true : false} 
                style={textArea ? styles.textArea : styles.input}
                placeholder={placeholder}
                value={input}
                multiline={textArea ? true : false}
                onChangeText={(text) => {
                    setInput(text);
                }} />
                {secureEntry &&
                    <Pressable onPress={() => {
                        setHidePassword(!hidePassword);
                    }}>
                        {hidePassword ? 
                            <Entypo name="eye" size={24} color="black" />
                        :
                            <Entypo name="eye-with-line" size={24} color="black" />
                        }
                    </Pressable>
                }
        </View>
    )
}

const styles = StyleSheet.create({
    inputGroup: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    input: {
        flex: 1,
        borderBottomColor: colors.pink,
        borderBottomWidth: 1,
        paddingVertical: 12,
        fontSize: 16,
    },
    textArea: {
        flex: 1,
        borderColor: colors.pink,
        borderWidth: 1,
        padding: 12,
        fontSize: 16,
        height: 200,
    }
})