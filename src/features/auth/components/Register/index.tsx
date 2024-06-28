import React, {PropsWithChildren, useEffect, useState} from 'react';
import {Pressable, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import CountryFlag from "react-native-country-flag";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, {useSharedValue, withTiming, useAnimatedStyle} from "react-native-reanimated"
import AuthScreenWrapper from '@auth/components/_partials/AuthScreenWrapper';
import IDcertifyIcon from '@drawables/idcertify-logo.svg';
import styles from './styles';
import RoundedCornersCTA from '@auth/components/_partials/RoundedCornersCTA';
import IndividualIcon from "@drawables/individual-icon.svg"
import BusinessGroupIcon from "@drawables/group-icon.svg"
import { Colors } from '@styles';
import { FormInput } from '@components';
import NextButton from '../_partials/NextButtom';
import PersonalInformation from '../_partials/PersonalInformation';
import SetPassword from '../_partials/SetPassword';
import { Switch } from 'react-native-paper';
import OneTimePassword from '../_partials/OneTimePassword';
import BusinessInformation from '../_partials/BusinessInformation';

type RegistrationModeType = 'individual'|'business'

const Register: React.FC = () => {

    const [registrationMode, setRegistrationMode] = useState<RegistrationModeType>("individual")
    const [registrationStep, setRegistrationStep] = useState(4)
    const isIndividualRegistration = registrationMode == "individual"
    const isBusinessRegistration = registrationMode == "business"
    const TOTAL_STEP = 3

    const animatedWidth = useSharedValue(0);
    const reanimatedStyle = useAnimatedStyle(()=>({
        backgroundColor: Colors.LightGreen,
        width:animatedWidth.value
    }))

    useEffect(()=>{
        animatedWidth.value=0
        animatedWidth.value = withTiming(50, { duration: 500 });
    },[registrationStep])


    const renderStepVisualItem = (step:number)=> {
        if (registrationStep == step){
            return ( <Animated.View style={[styles.animatedViewStyle,reanimatedStyle]}/>)
        }
        return (<View style={styles.visualItem}/>)
       
    }

    const renderstageView = ()=> {
        switch(registrationStep){
            case 1:
                return (<PersonalInformation handleNextStep= {setRegistrationStep}/>)
            case 2:
                return (<OneTimePassword handleNextStep= {setRegistrationStep} />)
            case 3:
                return (<SetPassword handleNextStep= {setRegistrationStep} />)
            case 4:
                return (<BusinessInformation handleNextStep= {setRegistrationStep} />)
        }
    }



  return (
    <AuthScreenWrapper>
        <ScrollView
            keyboardShouldPersistTaps={'handled'}
            style={styles.main}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
            bounces={false}
        >
            <IDcertifyIcon />
            <View style={styles.mainContent}>
                <View style={styles.headerWrapper}>
                    <Text style={styles.header}>ID Certify</Text>
                    <View style={styles.registrationTextWrapper}>
                        <Text style={styles.actionHeaderText}>Registration</Text>
                        <View style={styles.underLine}/>
                    </View>
                </View>
                <Text style={styles.overviewText}>
                    {`Verify details of your employee, staff or individuals, \nalso as an individual verify your credentials`}
                </Text>
                <View style={styles.CTAsection}>
                    <RoundedCornersCTA
                        title={"Individual"}
                        CTAIcon={<IndividualIcon fill={isIndividualRegistration?Colors.LightGreen:Colors.SecondaryWhite}/>}
                        buttonStyle={{width:"49%"}}
                        isActive={isIndividualRegistration}
                        handlePress={()=>{setRegistrationMode("individual")}}
                    />
                    <RoundedCornersCTA
                        title={"Business"}
                        CTAIcon={<BusinessGroupIcon fill={isBusinessRegistration?Colors.LightGreen:Colors.SecondaryWhite}/>}
                        buttonStyle={{width:"49%"}}
                        isActive={isBusinessRegistration}
                        handlePress={()=>{setRegistrationMode("business")}}
                    />
                </View>
                <Text style={styles.stepInfoText}>{`Step ${registrationStep} of 3`}</Text>
                {/* <PersonalInformation handleNextStep= {setRegistrationStep}/>
                <SetPassword /> */}
                {renderstageView()}

                {/* <FormInput 
                    label={"EMAIL"}
                    textInputProps={{
                        placeholder:"email@email.com"
                    }}
                    inputType="email"
                    touched={true}
                    error={"This is required"}
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
                    rightComponent={
                        <Icon 
                            name={'eye-off-outline'}
                            style={{fontSize:26, color:"grey"}}
                        />
                    }
                    touched={true}
                    error={"This is required"}
                />
                <Text style={styles.stepText}>Personal Information</Text>
                <View style={styles.visualContainer}>
                    {renderStepVisualItem(1)}
                    {renderStepVisualItem(2)}
                    {renderStepVisualItem(3)}
                </View>
                <View style={styles.footerSection}>
                    <NextButton 
                        handlePress={()=>{
                            setRegistrationStep((prev)=>{
                                if(prev==3){
                                    return 1
                                }
                                return ++prev
                            })
                        }} 
                    />
                    <TouchableOpacity onPress={()=>{}}>
                        <Text style={styles.questionText}>Have an account ? <Text style={styles.loginText}>Login</Text></Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </ScrollView>
    </AuthScreenWrapper>
  );
};
export default Register;
