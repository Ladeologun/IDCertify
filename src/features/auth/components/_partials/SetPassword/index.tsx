import React, { PropsWithChildren } from "react";
import { Text, View, ViewStyle} from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import * as Yup from "yup";
import { Formik } from 'formik';
import { FormInput } from "@components";
import NextButton from "../NextButtom";
import StepVisualItem from "../StepVisualItem";


interface Props {
    handleNextStep:(step:number)=>void
}

type FormValuesTypes = {
    password: string;
    confirm_password: string;
    
}

const SetPassword: React.FC<Props> = ({
    handleNextStep
}) => {
    const validationSchema = Yup.object().shape({
        password: Yup.string().required('Password is required'),
        confirm_password: Yup.string().oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    });

    const initialFormValue = {
        password:"",
        confirm_password:""
    }

    const sendPaaswordSetRequest = async (values:FormValuesTypes) => {
        console.log(values)
        handleNextStep(1)
        
    }

    return (
        <Formik
            initialValues={initialFormValue}
            validationSchema={validationSchema}
            onSubmit={sendPaaswordSetRequest}
        >
            {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
                <View>
                    <FormInput 
                        label={"password"}
                        textInputProps={{
                            placeholder:"password"
                        }}
                        inputType="password"
                        touched={!!touched.password}
                        handleTextChange={handleChange("password")}
                        error={errors.password}
                        value={values.password}
                    />
                    <FormInput
                        label={"confirm password"}
                        textInputProps={{
                            placeholder:"password"
                        }}
                        inputType="password"
                        hasRightAffix
                        handleTextChange={handleChange("confirm_password")}
                        touched={touched.confirm_password}
                        error={errors.confirm_password}
                    />
                    <Text style={styles.stepText}>Security</Text>
                    <View style={styles.visualContainer}>
                        <StepVisualItem step={1} registrationStep={3}/>
                        <StepVisualItem step={2} registrationStep={3}/>
                        <StepVisualItem step={3} registrationStep={3}/>
                        
                    </View>
                    <View style={styles.footerSection}>
                        <NextButton
                            label={'Submit'}
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
export default SetPassword;
