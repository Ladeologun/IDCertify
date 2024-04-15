import React from "react";
import {Pressable, Text, ViewStyle} from "react-native";

import styles from "./styles";


type Props = {
    isActive?: boolean;
    buttonStyle?: ViewStyle;
    handlePress?:()=>void;
    title: string;
    CTAIcon: React.JSX.Element
}

const RoundedCornersCTA: React.FC<Props> = ({
   isActive=false,
   buttonStyle,
   handlePress,
   title,
   CTAIcon
}) => {
    
    return (
        <Pressable
            onPress={handlePress}
            style={[styles.button, buttonStyle, isActive && styles.activeButton]}
        >
            <Text style={styles.CTATitle}>{title}</Text>
            {CTAIcon} 
        </Pressable>
    );
};
export default RoundedCornersCTA;
