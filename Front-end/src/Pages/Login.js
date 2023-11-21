import styles from "../Themes/LightTheme";
import MButton from "../Components/MButton";
import MTextInput from "../Components/MTextInput";
import { SafeAreaView, View } from "react-native";
import { useState, useContext } from "react";

export function Login(props) {
  const [user, setUser] = useState({ cpf: "", pwd: "" });

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MTextInput
          label="Email:"
          value={user}
          setValue={(text) => {
            setUser({ ...user, cpf: text });
          }}
        ></MTextInput>
        <MTextInput
          label="Senha:"
          value={user}
          setValue={(text) => {
            setUser({ ...user, pwd: text });
          }}
        ></MTextInput>
        <MButton onPress={() => console.log(user)} value="test"></MButton>
      </View>
    </SafeAreaView>
  );
}
