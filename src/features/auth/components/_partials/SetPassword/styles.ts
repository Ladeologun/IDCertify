import { StyleSheet, Platform, StatusBar } from "react-native";
import { Colors,Fonts,Typography } from "@styles";


const styles =  StyleSheet.create({
    visualContainer:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:2
    },
    stepText: {
        fontFamily: Fonts.RalewayRegular,
        fontSize: 15,
        fontWeight:"400",
        color:Colors.White,
        marginVertical:6
    },
    questionText: {
        marginTop:15,
        fontFamily: Fonts.RalewayRegular,
        fontSize: 13,
        color: Colors.TextPrimary
    },
    loginText: {
        color:Colors.White,
        fontWeight:"600",
    },
    footerSection: {
        marginTop: 50
    }
});

export default styles;
