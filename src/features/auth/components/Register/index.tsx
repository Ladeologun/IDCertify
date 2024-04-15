import React, {PropsWithChildren, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import CountryFlag from "react-native-country-flag";
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
    const isIndividualRegistration = registrationMode == "individual"
    const isBusinessRegistration = registrationMode == "business"



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
                <FormInput 
                    label={"EMAIL"}
                    textInputProps={{
                        placeholder:"email@email.com"
                    }}
                    inputType="email"
                />
                <FormInput
                    hasLeftAffix={true}
                    leftComponent={<CountryFlag isoCode="ng" size={16} style={{marginLeft:16}}/>} 
                    label={"PHONENUMBER"}
                    textInputProps={{
                        placeholder:"+234709897434"
                    }}
                    inputType="phone"
                />
            </View>
        </ScrollView>
    </AuthScreenWrapper>
  );
};
export default Register;
