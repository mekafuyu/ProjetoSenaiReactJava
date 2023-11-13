// https://medium.com/simform-engineering/create-responsive-design-in-react-native-f84522a44365
// https://www.browserstack.com/guide/how-to-make-react-native-app-responsive
import { StyleSheet } from "react-native";
import { verticalScale, horizontalScale, moderateScale } from "./Metrics";

const styles = StyleSheet.create({
    MButtonCont: {
        height: verticalScale(70),
        width: horizontalScale(150),
        marginTop: verticalScale(100),
        backgroundColor: "red",
        borderRadius: 20,
    },
    MButtonText: {
        color: "white",
        fontSize: moderateScale(18)
    },
});

export default styles;