// Modules imports
import { StyleSheet } from "react-native";
import Constants from "expo-constants";

// Styles imports
import colors from "./colors";

export default offerCardStyles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        marginHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGray,
        marginVertical: 8,
    },
    cardHeader: {
        position: "relative",
    },
    coverImage: {
        width: "100%",
        height: 192,
    },
    price: {
        backgroundColor: colors.black,
        color: colors.white,
        position: "absolute",
        bottom: 16,
        paddingHorizontal: 16,
        paddingVertical: 8,
        fontSize: 16,
        fontWeight: "500",
    },
    cardBody: {
        paddingVertical: 16,
        flexDirection: "row",
        gap: 8,
    },
    titleRating: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 16,
    },
    ratingContainer: {
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
    },
    reviewsAmount: {
        color: colors.gray,
    },
    userAvatar: {
        height: 64,
        width: 64,
        borderRadius: 32,
    }
})