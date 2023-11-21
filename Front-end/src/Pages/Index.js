import styles from "../Themes/LightTheme";
import MButton from "../Components/MButton";
import { SafeAreaView, View } from "react-native";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

export function Index(props) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MButton
          onPress={() => props.navigation.navigate("Login")}
          icon={faRightToBracket}
          value="Login"
        ></MButton>
        <MButton
          onPress={() => props.navigation.navigate("Cadastro")}
          color="yellow"
          value="Cadastro"
        ></MButton>
        <MButton
          onPress={() => props.navigation.navigate("NewCondo")}
          color="yellow"
          value="Novo Condominio"
        ></MButton>
        <MButton
          onPress={() => props.navigation.navigate("ViewCondos")}
          color="yellow"
          value="Ver Condominios"
        ></MButton>
      </View>
    </SafeAreaView>
  );
}
