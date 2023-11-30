import styles from "../Themes/LightTheme";
import MButton from "../Components/MButton";
import MTextInput from "../Components/MTextInput";
import { SafeAreaView, View } from "react-native";
import { useState, useContext } from "react";
import { UtilsContext } from "../Contexts/UtilsContext";
import axios from "axios";

export function Login(props) {
  const [currUser, setCurrUser] = useState({ cpf: "", pwd: "" });
  const {utils, setUtils} = useContext(UtilsContext);

  async function tryLogin(user) {
    axios.post("http://localhost:8080/resident/login", currUser)
    .then(async (res) => {
      await sessionStorage.setItem('loggedUser', JSON.stringify({user: res.data.name, userId: res.data.id}))
      props.navigation.navigate("HomeResident")
    });
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MTextInput
          label="Cpf:"
          value={currUser}
          setValue={(text) => {
            setCurrUser({ ...currUser, cpf: text });
          }}
        ></MTextInput>
        <MTextInput
          label="Senha:"
          value={currUser}
          secureTextEntry={true}
          setValue={(text) => {
            setCurrUser({ ...currUser, pwd: text });
          }}
        ></MTextInput>
        <MButton
          onPress={() => {
            tryLogin();
          }}
          value="Login"
        ></MButton>
      </View>
    </SafeAreaView>
  );
}
