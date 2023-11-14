// https://medium.com/simform-engineering/create-responsive-design-in-react-native-f84522a44365
// https://www.browserstack.com/guide/how-to-make-react-native-app-responsive
import { StyleSheet } from "react-native";
import { verticalScale, horizontalScale, moderateScale } from "./Metrics";

const defaultStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    
    MButtonCont: {
        justifyContent: "center",
        alignItems: "center",
        height: verticalScale(70),
        width: horizontalScale(150),
        marginTop: verticalScale(10),
        backgroundColor: "white",
        borderRadius: 20,
    },
    MButtonText: {
        fontSize: moderateScale(18)
    },
});

export default defaultStyle;