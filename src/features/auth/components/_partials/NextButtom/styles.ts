import { StyleSheet, Platform, StatusBar } from "react-native";
import { Colors, Fonts } from "@styles";


const styles =  StyleSheet.create({
    
    
    nextBtn: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingLeft: 35,
        paddingRight:30,
        paddingVertical:15,
        backgroundColor:"transparent",
        borderRadius:4,
        borderWidth:1,
        borderColor: Colors.White
    },
    nextTextStyle: {
        fontFamily: Fonts.RalewayRegular,
        fontSize: 16,
        fontWeight:"600",
        color:Colors.White
    }
});

export default styles;
