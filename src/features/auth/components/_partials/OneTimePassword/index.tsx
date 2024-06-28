import React, { PropsWithChildren } from "react";
import { Text, View, ViewStyle, useWindowDimensions} from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import * as Yup from "yup";
import { Formik } from 'formik';
import { FormInput, OTPInput } from "@components";
import NextButton from "../NextButtom";
import StepVisualItem from "../StepVisualItem";
import { Colors } from "@styles";


interface Props {
    handleNextStep:(step:number)=>void
}

type FormValuesTypes = {code: string}

const OneTimePassword: React.FC<Props> = ({
    handleNextStep
}) => {

    const windowHeight = useWindowDimensions().height
    const SCALING_BASE = 700
    const getScalingFactor = () => (SCALING_BASE - windowHeight) / SCALING_BASE
    const getScaledValue = (realValue:number) =>
        realValue - realValue * getScalingFactor()
    const scaleIfScreenSmall = (valueToScale:number) =>
        isScreenSmall() ? getScaledValue(valueToScale) : valueToScale
    const isScreenSmall = () => windowHeight < SCALING_BASE



    const validationSchema = Yup.object().shape({
        code: Yup.string().required('code is required'),
    });

    const initialFormValue = {code:""}

    const sendPaaswordSetRequest = async (values:FormValuesTypes, actions:any) => {
        if (values.code.length < 6){
            actions.setFieldError("code","please enter a valid otp")
            return
        }
        console.log(values)
        handleNextStep(3)
        
    }

    return (
        <Formik
            initialValues={initialFormValue}
            validationSchema={validationSchema}
            onSubmit={sendPaaswordSetRequest}
        >
            {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
                <View>
                    <Text style={styles.overviewText}>Confirm the link sent to your email, and you will receive an <Text style={styles.otpText}>OTP</Text> to continue your registration process</Text>
                    <Text style={styles.subHeaderText}>OTP Confirmation</Text>
                    <OTPInput
                        inputCount={6}
                        inputStyle={{
                            width: scaleIfScreenSmall(51),
                            height: scaleIfScreenSmall(61),
                            // color: Colors.Black
                        }}
                        containerStyle={{marginBottom: 24}}
                        handleTextChange={handleChange("code")}
                        error={errors?.code}
                        autoFocus
                    />
                   
                    <Text style={styles.stepText}>OTP</Text>
                    <View style={styles.visualContainer}>
                        <StepVisualItem step={1} registrationStep={2}/>
                        <StepVisualItem step={2} registrationStep={2}/>
                        <StepVisualItem step={3} registrationStep={2}/>
                        
                    </View>
                    <View style={styles.footerSection}>
                        <NextButton
                            label={'Validate OTP'}
                            buttonStyle={{backgroundColor:Colors.White}}
                            titleStyle={{color:Colors.Black}}
                            arrowColor={Colors.Black}
                            handlePress={handleSubmit} 
                        />
                        <TouchableOpacity onPress={()=>{}}>
                            <Text style={styles.questionText}>Have an account ? <Text style={styles.loginText}>Login</Text></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}

        </Formik>
    );
};
export default OneTimePassword;
