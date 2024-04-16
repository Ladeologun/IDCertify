import React, {PropsWithChildren, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import CountryFlag from "react-native-country-flag";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AuthScreenWrapper from '@auth/components/_partials/AuthScreenWrapper';
import IDcertifyIcon from '@drawables/idcertify-logo.svg';
import styles from './styles';
import RoundedCornersCTA from '@auth/components/_partials/RoundedCornersCTA';
import IndividualIcon from "@drawables/individual-icon.svg"
import BusinessGroupIcon from "@drawables/group-icon.svg"
import { Colors } from '@styles';
import { FormInput } from '@components';

type RegistrationModeType = 'individual'|'business'

const Register: React.FC = () => {

    const [registrationMode, setRegistrationMode] = useState<RegistrationModeType>("individual")
    const [registrationStep, setRegistrationStep] = useState(1)
    const isIndividualRegistration = registrationMode == "individual"
    const isBusinessRegistration = registrationMode == "business"
    const TOTAL_STEP = 3


    const renderStepVisualItem = (step:number)=> {
        if (registrationStep == step){
            // render animated view
        }else {
            //render normal view
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
                <Text style={styles.stepInfoText}>Step 1 of 3</Text>

                <FormInput 
                    label={"EMAIL"}
                    textInputProps={{
                        placeholder:"email@email.com"
                    }}
                    inputType="email"
                    touched={true}
                    // error={"This is required"}
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
                    // error={"This is required"}
                />
                <Text>Pesonal Information</Text>
            </View>
        </ScrollView>
    </AuthScreenWrapper>
  );
};
export default Register;
