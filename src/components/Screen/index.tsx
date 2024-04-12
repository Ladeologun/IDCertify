import React, { PropsWithChildren } from "react";
import { StatusBar, SafeAreaView,Text, View} from "react-native";
import BackgroundArcIcon from "@drawables/background-arc.svg"
import styles from "./styles";


type ScreenProps = {
    hideStatusBar?: boolean
}

const Screen: React.FC<PropsWithChildren<ScreenProps>> = ({
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
            {/* <BackgroundArcIcon style={styles.backgroundArc}/> */}
            <View style={{backgroundColor:"green",flex:1}}>

            {/* <Text style={styles.text}>lorem thei si anvery lonf tets that i am trying to test a</Text> */}
            </View>
           
        </SafeAreaView>
    );
};
export default Screen;
