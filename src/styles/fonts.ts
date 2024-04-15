import { Platform } from "react-native";

export const Fonts = {
    ...Platform.select(
        {
            ios:{
                RalewayBlack: "Raleway-Black",
                RalewayBlackItalic: "Raleway-BlackItalic",
                RalewayBold: "Raleway-Bold",
                RalewayBoldItalic: "Raleway-BoldItalic",
                RalewayExtraBold: "Raleway-ExtraBold",
                RalewayExtraBoldItalic: "Raleway-ExtraBoldItalic",
                RalewayExtraLight: "Raleway-ExtraLight",
                RalewayExtraLightItalic: "Raleway-ExtraLightItalic",
                RalewayItalic: "Raleway-Italic",
                RalewayLight: "Raleway-Light",
                RalewayLightItalic: "Raleway-LightItalic",
                RalewayMedium: "Raleway-Medium",
                RalewayMediumItalic: "Raleway-MediumItalic",
                RalewayRegular: "Raleway-Regular",
                RalewaySemiBold: "Raleway-SemiBold",
                RalewaySemiBoldItalic: "Raleway-SemiBoldItalic",
                RalewayThin: "Raleway-Thin",
                RalewayThinItalic: "Raleway-ThinItalic"
            },
            android: {
                RalewayBlack: "RalewayBlack",
                RalewayBlackItalic: "RalewayBlackItalic",
                RalewayBold: "RalewayBold",
                RalewayBoldItalic: "RalewayBoldItalic",
                RalewayExtraBold: "RalewayExtraBold",
                RalewayExtraBoldItalic: "RalewayExtraBoldItalic",
                RalewayExtraLight: "RalewayExtraLight",
                RalewayExtraLightItalic: "RalewayExtraLightItalic",
                RalewayItalic: "RalewayItalic",
                RalewayLight: "RalewayLight",
                RalewayLightItalic: "RalewayLightItalic",
                RalewayMedium: "RalewayMedium",
                RalewayMediumItalic: "RalewayMediumItalic",
                RalewayRegular: "RalewayRegular",
                RalewaySemiBold: "RalewaySemiBold",
                RalewaySemiBoldItalic: "RalewaySemiBoldItalic",
                RalewayThin: "RalewayThin",
                RalewayThinItalic: "RalewayThinItalic"
            }
        }
    )
};

