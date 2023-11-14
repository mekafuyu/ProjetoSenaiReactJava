import styles from "../Themes/LightTheme";
import MButton from "../Components/MButton";
import { SafeAreaView, View } from "react-native";

export function Index(props){
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <MButton
                    onPress = { () => console.log("1")}
                    color = "green"
                    value = "Login">
                </MButton>
                <MButton
                    onPress = { () => console.log("2")}
                    color = "yellow"
                    value = "Cadastro">
                </MButton>
                <MButton
                    onPress = { () => console.log("3")}
                    color = "orange"
                    value = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa">
                </MButton>
            </View>
        </SafeAreaView>
    )
}