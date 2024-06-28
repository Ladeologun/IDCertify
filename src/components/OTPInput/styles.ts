import { StyleSheet } from "react-native";
import { Colors, Fonts, Typography } from "@styles";

const styles = StyleSheet.create({
    mainContainer: {
        gap: 8,
        alignItems:"center"
    },
    otpContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 6
    },
    textInput: {
        height: 61,
        width: 51,
        borderWidth: 1,
        borderColor: Colors.White,
        borderRadius: 4,
        textAlign: "center",
        fontSize:20,
        fontWeight:"600",
        color:Colors.White
    },
    error: {
        borderColor: Colors.Red
    },
    errorText: {
        fontFamily: Fonts.RalewayRegular,
        fontSize:13,
        color: Colors.Red
    }
})

export default styles
