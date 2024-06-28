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
        borderWidth:1,
        borderColor:Colors.Red
    },
    textInput: {
        flex:1,
        fontFamily: Fonts.RalewayRegular,
        fontSize:14
    },
    textInputLabel: {
        fontFamily: Fonts.RalewaySemiBold,
        fontSize: 12,
        fontWeight:"700",
        marginBottom:8,
        color: Colors.White,
        textTransform:"uppercase"

    },
    wrapper: {
        marginBottom:22
    },
    error:{
        fontFamily: Fonts.RalewayRegular,
        fontSize: 13,
        // lineHeight: 22,
        color: Colors.Red
    },
    errorContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 3
    }
});

export default styles;
