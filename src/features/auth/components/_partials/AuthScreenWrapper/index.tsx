import React, { PropsWithChildren } from "react";
import { StatusBar, SafeAreaView,Text, View} from "react-native";
import BackgroundArcIcon from "@drawables/background-arc.svg"
import styles from "./styles";


type ScreenProps = {
    hideStatusBar?: boolean
}

const AuthScreenWrapper: React.FC<PropsWithChildren<ScreenProps>> = ({
    children,
    hideStatusBar = false,
}) => {
    
    return (
        <SafeAreaView style={styles.screen}>
            <StatusBar
                barStyle="dark-content"
                hidden={hideStatusBar}
                translucent={true}
            />
            <BackgroundArcIcon style={styles.backgroundArc}/>
            {children}
        </SafeAreaView>
    );
};
export default AuthScreenWrapper;
