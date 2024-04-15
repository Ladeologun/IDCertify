import React, { useState } from "react";
import { View,Text, TouchableWithoutFeedback, TextStyle} from "react-native";
import { TextInput } from "react-native-paper";
import styles from "./styles";
import { Colors } from "@styles";


type Props = {
    label?:string
    hasLeftAffix?: boolean
    hasRightAffix?: boolean
    leftComponent?:React.ReactNode;
    rightComponent?:React.ReactNode;
    value?: string;
    textInputProps?: {
        label?:string;
        placeholder?:string;
        disabled?:boolean;
        multiline?:boolean;
        
    };
    textInputStyle?:TextStyle;
    inputType:string;
    handleRightPress?:()=>void;
    handleLeftPress?:()=>void;
    handleTextChange?:()=>void;

}

interface InputProps {
    autoCorrect?: boolean;
    keyboardType?: "email-address"|"number-pad"|"phone-pad"|"numeric";
    autoCompleteType?: "email"|"name"|"username"|"street-address"|"postal-code"|"tel"|"password";
    autoCapitalize?: "none" | "words" | "characters" | "sentences" | undefined;
    secureTextEntry?: boolean;
}

export const FormInput: React.FC<Props> = ({
    label,
    hasLeftAffix,
    hasRightAffix,
    leftComponent,
    rightComponent,
    handleRightPress,
    handleLeftPress,
    handleTextChange,
    value,
    textInputProps,
    textInputStyle,
    inputType
}) => {

    const [isSecureTextEntry, setSecureTextEntry] = useState(inputType === "password")


    const getInputTypeProps = (type:string):InputProps => {
        switch (type) {
            case "email":
                return {
                    autoCorrect: false,
                    keyboardType: "email-address",
                    autoCompleteType: "email",
                    autoCapitalize: "none"
                };
            case "password":
                return {
                    autoCorrect: false,
                    secureTextEntry: true,
                    autoCompleteType: "password",
                    autoCapitalize: "none"
                };
            case "name":
                return {
                    autoCorrect: false
                };
            case "digits":
                return {
                    keyboardType: "phone-pad"
                };
            case "textName":
                return {
                    autoCorrect: false,
                    autoCapitalize: "words",
                    autoCompleteType: "name"
                };
            case "textUsername":
                return {
                    autoCorrect: false,
                    autoCapitalize: "none",
                    autoCompleteType: "username"
                };
            case "textCapWords":
                return {
                    autoCapitalize: "words"
                };
            case "textCapCharacters":
                return {
                    autoCapitalize: "characters"
                };
            case "textAddress":
                return {
                    autoCompleteType: "street-address"
                };
            case "zip":
                return {
                    autoCompleteType: "postal-code",
                    keyboardType: "number-pad"
                };
            case "phone":
                return {
                    keyboardType: "phone-pad",
                    autoCompleteType: "tel"
                };
            case "number":
                return {
                    keyboardType: "number-pad"
                };
            case "numberDecimal":
                return {
                    keyboardType: "numeric"
                };
            default:
                return {};
        }
    };

    return (
        <View style={styles.wrapper}>
            <Text style={styles.textInputLabel}>{label}</Text>
            <View style={styles.inputContainer}>
                {!!hasLeftAffix && 
                    <TouchableWithoutFeedback
                        onPress={handleLeftPress}
                    >
                        <View>
                            {leftComponent}
                        </View>
                    </TouchableWithoutFeedback>
                }
                <TextInput
                    mode="outlined"
                    // error
                    dense={!textInputProps?.multiline}
                    value={value !== undefined && value !== null? String(value): value}
                    label={textInputProps?.label}
                    placeholder={textInputProps?.placeholder}
                    onChangeText={handleTextChange}
                    disabled={textInputProps?.disabled}
                    textAlignVertical={textInputProps?.multiline?"top":"auto"}
                    underlineColor="transparent"
                    textColor={Colors.Black}
                    secureTextEntry={isSecureTextEntry}
                    activeOutlineColor={Colors.BackgroundPrmiary}
                    outlineStyle={{borderWidth:0}}
                    outlineColor="transparent"
                    {...getInputTypeProps(inputType)}
                    style={[styles.textInput, textInputStyle]}
                />
                {!!hasRightAffix && 
                    <TouchableWithoutFeedback
                        onPress={handleRightPress}
                    >
                        {rightComponent}
                    </TouchableWithoutFeedback>
                }
            </View>
        </View>
    );
};

