import { MutableRefObject, useRef, useState } from "react"
import { Text, TextInput, View, ViewStyle } from "react-native";
import styles from "./styles";

interface Props {
    inputCount:number;
    inputStyle?: ViewStyle;
    otpContainerStyle?: ViewStyle;
    containerStyle?: ViewStyle;
    handleTextChange?:(text:string)=>void;
    error?: string;
    autoFocus?: boolean
    
}

const OTPInput:React.FC<Props> = ({
    inputCount, 
    inputStyle, 
    otpContainerStyle, 
    containerStyle, 
    handleTextChange, 
    error, 
    autoFocus
}) => {

    const [otp, setOtp] = useState("");
    const inputRefs = useRef([]) as MutableRefObject<TextInput[]>;

    const onChangeText = (index: number) => (value: string) => {
        const splitOtp = otp.split("");
        if (value?.length > 1) {
            value.split("").forEach((val, i) => splitOtp[i] = val)
        } else {
            splitOtp[index] = value;
        }
        const updatedText = splitOtp.join("");
        setOtp(updatedText);
        handleTextChange && handleTextChange(updatedText)
        if (value && index < inputCount - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    }

    const onKeyPress = (index: number) => (e:any) => {
        if (e.nativeEvent.key === "Backspace" && index !== 0) {
            inputRefs.current[index - 1]?.focus();
            return;
        }
    }

    return (
        <View style={[styles.mainContainer, containerStyle]}>
            <View style={[styles.otpContainer, otpContainerStyle]}>
                {
                    Array.from({length: inputCount}).map((_, index) => (
                        <TextInput
                            style={[styles.textInput, !!error && styles.error, inputStyle]}
                            value={otp[index] || ""}
                            onChangeText={onChangeText(index)}
                            ref={(ref) => (inputRefs.current[index] = ref!)}
                            onKeyPress={onKeyPress(index)}
                            maxLength={index === 0 ? inputCount: 1 }
                            keyboardType="number-pad"
                            autoFocus={!!autoFocus && index === 0}
                            key={index}
                        />
                    ))
                }
            </View>
            {!!error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    )
}

export default OTPInput
