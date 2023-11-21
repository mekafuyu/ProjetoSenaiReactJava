import styles from "../Themes/LightTheme";
import MButton from "../Components/MButton";
import { SafeAreaView, View } from "react-native";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

export function Index(props) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MButton
          onPress={() => console.log("a")}
          value="Reservar uma vaga"
        ></MButton>
        <MButton onPress={() => console.log("a")} value="Login"></MButton>
        <MButton onPress={() => console.log("a")} value="Login"></MButton>
        <MButton onPress={() => console.log("a")} value="Login"></MButton>
      </View>
    </SafeAreaView>
  );
}
