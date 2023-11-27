import styles from "../../Themes/LightTheme";
import MButton from "../../Components/MButton";
import { SafeAreaView, View } from "react-native";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

export function HomeResident(props) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MButton
          onPress={() => console.log("a")}
          value="Reservar uma vaga"
        ></MButton>
        <MButton
          onPress={() => props.navigation.navigate("ReservarChurrasqueira")}
          value="Reservar churrasqueira"></MButton>
        <MButton
          onPress={() => console.log("a")}
          value="Denuncia"></MButton>
        <MButton
          onPress={() => console.log("a")}
          value="Gerar boleto"></MButton>
        <MButton
          onPress={() => console.log("a")}
          value="Votações"></MButton>
      </View>
    </SafeAreaView>
  );
}
