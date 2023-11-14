// https://medium.com/simform-engineering/create-responsive-design-in-react-native-f84522a44365
// https://www.browserstack.com/guide/how-to-make-react-native-app-responsive
import { StyleSheet } from "react-native";
import { verticalScale, horizontalScale, moderateScale } from "./Metrics";
import defaultStyle from "./Default";

const styles = StyleSheet.create({
    ...defaultStyle,

    container: {
        ...defaultStyle.container
    },
    
    MButtonCont: {
        ...defaultStyle.MButtonCont,
        backgroundColor: "gray"
    },
    MButtonText: {
        ...defaultStyle.MButtonText,
        color: "white"
    },
});

export default styles;