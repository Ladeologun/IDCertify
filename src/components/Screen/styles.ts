import { StyleSheet, Platform, StatusBar } from "react-native";

console.log(StatusBar.currentHeight)

const styles =  StyleSheet.create({
    screen: {
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight: 0,
        backgroundColor:"#3817FF",
        flex:1
    },
    backgroundArc: {
        position:"absolute",
        top: 48 ,
        left:0,
        zIndex:-12
    },
    text: {
        color:"white",
        backgroundColor:"red"
    }
   
   

});

export default styles;
