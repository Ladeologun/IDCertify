import React, { PropsWithChildren } from "react";
import { Text} from "react-native";
import AuthScreenWrapper from "@auth/components/_partials/AuthScreenWrapper";



const Login: React.FC = () => {
    
    return (
        <AuthScreenWrapper>
            <Text>this is the Login screen</Text>
        </AuthScreenWrapper> 
    );
};
export default Login;
