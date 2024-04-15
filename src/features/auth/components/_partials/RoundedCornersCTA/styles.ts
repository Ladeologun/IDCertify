import { StyleSheet, Platform, StatusBar } from "react-native";
import { Colors, Fonts } from "@styles";


const styles =  StyleSheet.create({
    activeButton: {
        borderColor:Colors.White,
    },
    button:{
        paddingVertical:15,
        borderRadius:30,
        borderWidth:1,
        borderColor:"transparent",
        width:"50%",
        backgroundColor:"transparent",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    CTATitle: {
        fontFamily: Fonts.RalewayRegular,
        fontSize: 14,
        fontWeight:"600",
        color:Colors.White,
    }
});

export default styles;
