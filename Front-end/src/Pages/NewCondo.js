import styles from "../Themes/LightTheme";
import MButton from "../Components/MButton";
import MTextInput from "../Components/MTextInput";
import { SafeAreaView, View } from "react-native";
import { useState, useContext } from "react";
import axios from "axios";

export function NewCondo(props) {
  const [condo, setCondo] = useState({ name: "", cep: "" });

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MTextInput
          label="Nome:"
          value={condo.name}
          setValue={(text) => {
            setCondo({ ...condo, name: text });
          }}
        ></MTextInput>
        <MTextInput
          label="Cep:"
          value={condo.cep}
          setValue={(text) => {
            setCondo({ ...condo, cep: text });
          }}
        ></MTextInput>
        <MButton
          onPress={async () =>
            await axios
              .post("http://localhost:8080/condominium", condo)
              .then(props.navigation.navigate("Index"))
          }
          value="Cadastrar"
        ></MButton>
      </View>
    </SafeAreaView>
  );
}
