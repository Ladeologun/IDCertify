import { StyleSheet, Platform, StatusBar } from "react-native";
import { Colors,Fonts,Typography } from "@styles";


const styles =  StyleSheet.create({
    actionHeaderText: {
        fontFamily: Fonts.RalewayRegular,
        fontSize: 16,
        fontWeight:"600",
        color:"white",
        marginBottom:4
    },
    main: {
        flex: 1  
    },
    contentContainerStyle: {
        paddingTop: 16,
        flexGrow: 1,
        justifyContent: "space-between"
    },
    mainContent: {
        paddingHorizontal:18,
        // backgroundColor:"red",
        flex:1,
        marginTop:43
    },
    header: {
        ...Typography.header1,
        fontWeight:"800",
        color:Colors.White
    },
    headerWrapper: {
        flexDirection:"row",
        marginBottom: 18
    },
    registrationTextWrapper: {
        marginLeft: 10
    },
    underLine: {
        height:2,
        width: "60%",
        backgroundColor: Colors.LightGreen
    },
    overviewText: {
        fontFamily: Fonts.RalewayRegular,
        fontSize: 14,
        fontWeight:"400",
        color: Colors.TextPrimary 
    },
    CTAsection: {
        marginTop:90,
        flexDirection:"row",
        justifyContent:"space-between"
        // height:10,
        // backgroundColor:"red"
    }
});

export default styles;
