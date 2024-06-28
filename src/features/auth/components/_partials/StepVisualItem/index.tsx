import React, { useEffect } from "react";
import {View} from "react-native";
import Animated, {useSharedValue, withTiming, useAnimatedStyle} from "react-native-reanimated"
import styles from "./styles";
import { Colors } from "@styles";


type Props = {
    registrationStep: number;
    step:number
}

const StepVisualItem: React.FC<Props> = ({
    registrationStep,
    step
    
}) => {

    const animatedWidth = useSharedValue(0);
    const reanimatedStyle = useAnimatedStyle(()=>({
        backgroundColor: Colors.LightGreen,
        width:animatedWidth.value
    }))

    useEffect(()=>{
        animatedWidth.value=0
        animatedWidth.value = withTiming(50, { duration: 500 });
    },[registrationStep])
    
    if (registrationStep == step){
        return ( <Animated.View style={[styles.animatedViewStyle,reanimatedStyle]}/>)
    }
    return (<View style={styles.visualItem}/>)
};
export default StepVisualItem;
