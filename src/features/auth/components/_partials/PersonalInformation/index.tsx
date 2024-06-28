import React, { PropsWithChildren } from "react";
import { StatusBar, SafeAreaView,Text, View, ViewStyle} from "react-native";
import Icon from '@drawables/arrow-forward.svg';
import BackgroundArcIcon from "@drawables/background-arc.svg"
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import CountryFlag from "react-native-country-flag";
import { TextStyle } from "react-native";
import * as Yup from "yup";
import { Formik } from 'formik';
import { Colors } from "@styles";
import { FormInput } from "@components";
import NextButton from "../NextButtom";
import StepVisualItem from "../StepVisualItem";


interface Props {
    handleNextStep:(step:number)=>void
}

type FormValuesTypes = {
    email: string;
    phone: string;
    
}

const PersonalInformation: React.FC<Props> = ({
    handleNextStep
}) => {
    const validationSchema = Yup.object().shape({
        phone: Yup.string()
            .required("Please enter your phone number")
            .min(11, "Please enter a valid phone number"),
        email: Yup.string()
            .required("Please enter your email address")
            .email("Please enter a valid email address")
    });

    const initialFormValue = {
        email:"",
        phone:""
    }

    const register = async (values:FormValuesTypes) => {
        console.log(values)
        handleNextStep(2)
    }

    return (
        <Formik
            initialValues={initialFormValue}
            validationSchema={validationSchema}
            onSubmit={register}
        >
            {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
                <View>
                    <FormInput 
                        label={"EMAIL"}
                        textInputProps={{
                            placeholder:"email@email.com"
                        }}
                        inputType="email"
                        touched={!!touched.email}
                        handleTextChange={handleChange("email")}
                        error={errors.email}
                        value={values.email}
                    />
                    <FormInput
                        hasLeftAffix={true}
                        leftComponent={<CountryFlag isoCode="ng" size={16}/>} 
                        label={"PHONENUMBER"}
                        textInputProps={{
                            placeholder:"+234709897434"
                        }}
                        inputType="phone"
                        hasRightAffix
                        handleTextChange={handleChange("phone")}
                        touched={touched.phone}
                        error={errors.phone}
                    />
                    <Text style={styles.stepText}>Personal Information</Text>
                    <View style={styles.visualContainer}>
                        <StepVisualItem step={1} registrationStep={1}/>
                        <StepVisualItem step={2} registrationStep={1}/>
                        <StepVisualItem step={3} registrationStep={1}/>
                        
                    </View>
                    <View style={styles.footerSection}>
                        <NextButton 
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
export default PersonalInformation;
