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
        flex:1,
        marginTop:30
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
        lineHeight:21,
        fontWeight:"400",
        color: Colors.TextPrimary 
    },
    CTAsection: {
        marginTop:55,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    stepInfoText: {
        fontFamily: Fonts.RalewayRegular,
        fontSize: 16,
        fontWeight:"600",
        color: Colors.LightYellow,
        marginTop:25,
        marginBottom:24
    },
    visualItem: {
        height:6,
        width:15,
        borderRadius:2,
        marginRight:4,
        backgroundColor:"rgba(255, 255, 255, 0.5)"
    },
    animatedViewStyle: {
        height:6,
        marginRight:4,
        borderRadius:2,
    },
    visualContainer:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:4
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
