import { Colors, Fonts } from "@styles";
import { StyleSheet, Platform, StatusBar } from "react-native";



const styles =  StyleSheet.create({
    inputContainer: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor: Colors.White,
        borderRadius:4,
        borderWidth:1,
        borderColor:"transparent"
    },
    inputContainerError: {
        borderWidth:1.5,
        borderColor:Colors.Red
    },
    textInput: {
        flex:1,
        fontFamily: Fonts.RalewayRegular,
        fontSize:16
    },
    textInputLabel: {
        fontFamily: Fonts.RalewaySemiBold,
        fontSize: 12,
        fontWeight:"700",
        marginBottom:8,
        color: Colors.White

    },
    wrapper: {
        marginBottom:24
    },
    error:{
        fontFamily: Fonts.RalewayMediumItalic,
        fontSize: 14,
        lineHeight: 22,
        color: Colors.Red
    },
    errorContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4
    }
});

export default styles;
