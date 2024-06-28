import React, { PropsWithChildren } from "react";
import { StatusBar, SafeAreaView,Text, View, ViewStyle} from "react-native";
import Icon from '@drawables/arrow-forward.svg';
import BackgroundArcIcon from "@drawables/background-arc.svg"
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import CountryFlag from "react-native-country-flag";
import { Dropdown } from 'react-native-element-dropdown';
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
    country: string;
    email: string;
    registration_number: string;
    
}

const BusinessInformation: React.FC<Props> = ({
    handleNextStep
}) => {

    const validationSchema = Yup.object().shape({
        country: Yup.string()
            .required("Please select your country"),
        email: Yup.string()
            .required("Please enter your email address")
            .email("Please enter a valid email address"),
        registration_number: Yup.string()
            .required("Please enter your registration number"),
    });

    const initialFormValue = {
        country:"",
        email:"",
        registration_number:""
    }

    const register = async (values:FormValuesTypes) => {
        console.log("----here--")
        console.log(values)
        // handleNextStep(2)
    }



    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
      ];

    return (
        <Formik
            initialValues={initialFormValue}
            validationSchema={validationSchema}
            onSubmit={register}
        >
            {({ handleChange, handleBlur, handleSubmit, values,errors,touched,setFieldValue }) => (
                <View>
                    <Dropdown
                        style={[styles.dropdown]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        search
                        maxHeight={320}
                        labelField="label"
                        valueField="value"
                        placeholder={'Select item' }
                        searchPlaceholder="Search..."
                        value={values.country}
                        // onFocus={() => setIsFocus(true)}
                        // onBlur={() => setIsFocus(false)}
                        onChange={(item):void=>{
                            const func = handleChange("country")
                            func(item.value)
                        }}
                        // onChange={(item) => {
                        //     console.log(item)
                        //     setFieldValue("country",item.value)
                        //   }}
                    />

                    <FormInput 
                        label={"email"}
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
                        label={"RC - Number"}
                        textInputProps={{
                            placeholder:"+234709897434"
                        }}
                        inputType=""
                        hasRightAffix
                        handleTextChange={handleChange("registration_number")}
                        touched={touched.registration_number}
                        error={errors.registration_number}
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
export default BusinessInformation;
