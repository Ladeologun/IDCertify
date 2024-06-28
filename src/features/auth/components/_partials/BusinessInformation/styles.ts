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
    },








    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
});

export default styles;
