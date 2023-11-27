import styles from "../../Themes/LightTheme";
import MButton from "../../Components/MButton";
import { SafeAreaView, View } from "react-native";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

export function HomeFunc(props) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MButton
          onPress={() => props.navigation.navigate("ReservarChurrasqueira")}
          value="Receber Visitante"
        ></MButton>
        <MButton
          onPress={() => props.navigation.navigate("VisualizarCondoResident")}
          value="Visualizar Condominios e Moradores"></MButton>
      </View>
    </SafeAreaView>
  );
}
