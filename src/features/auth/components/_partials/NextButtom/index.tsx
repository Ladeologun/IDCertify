import React, { PropsWithChildren } from "react";
import { StatusBar, SafeAreaView,Text, View, ViewStyle} from "react-native";
import Icon from '@drawables/arrow-forward.svg';
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import { TextStyle } from "react-native";
import { Colors } from "@styles";


type Props = {
    handlePress: ()=> void;
    buttonStyle?: ViewStyle;
    titleStyle?: TextStyle;
    arrowColor?: string;
    label?: string
}

const NextButton: React.FC<Props> = ({
    handlePress,
    buttonStyle,
    titleStyle,
    arrowColor=Colors.White,
    label="Next"
    
}) => {
    
    return (
        <TouchableOpacity
            onPress={handlePress}
        >
           <View style={[styles.nextBtn,buttonStyle]}>
                <Text style={[styles.nextTextStyle, titleStyle]}>{label}</Text>
                <Icon  fill={arrowColor}/>
           </View>
        </TouchableOpacity>
    );
};
export default NextButton;
