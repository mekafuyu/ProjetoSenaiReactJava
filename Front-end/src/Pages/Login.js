import styles from "../Themes/LightTheme";
import MButton from "../Components/MButton";
import MTextInput from "../Components/MTextInput";
import { SafeAreaView, View } from "react-native";
import { useState, useContext } from "react";
import axios from "axios";

export function Login(props) {
  const [currUser, setCurrUser] = useState({ cpf: "", pwd: "" });

  function tryLogin(user){
    axios.post("")
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MTextInput
          label="Cpf:"
          value={currUser}
          setValue={(text) => {
            setUser({ ...currUser, cpf: text });
          }}
        ></MTextInput>
        <MTextInput
          label="Senha:"
          value={currUser}
          setValue={(text) => {
            setUser({ ...currUser, pwd: text });
          }}
        ></MTextInput>
        <MButton width="100" onPress={() => props.navigation.navigate("HomeResident")} value="login"></MButton>
      </View>
    </SafeAreaView>
  );
}
