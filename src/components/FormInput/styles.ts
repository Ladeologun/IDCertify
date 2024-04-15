import { Colors, Fonts } from "@styles";
import { StyleSheet, Platform, StatusBar } from "react-native";



const styles =  StyleSheet.create({
    inputContainer: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor: Colors.White,
        borderRadius:4,
        // borderWidth:1.5,
        borderColor:"red"
    },
    textInput: {
        flex:1,
        // backgroundColor:"red"
    },
    textInputLabel: {
        fontFamily: Fonts.RalewaySemiBold,
        fontSize: 12,
        fontWeight:"700",
        marginBottom:4,
        color: Colors.White

    },
    wrapper: {
        marginTop:20
    }
});

export default styles;
