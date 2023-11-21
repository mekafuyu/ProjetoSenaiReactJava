import styles from "../Themes/LightTheme";
import MButton from "../Components/MButton";
import MSelect from "../Components/MSelect";
import { SafeAreaView, View } from "react-native";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export function Index(props) {
  var options = []

  async function getCondos()
  {
    await axios.get("http://localhost:8080/condominium")
      .then((data) => {
        options = []
        data.data.map((condo) =>{
          options.push({value: condo.id, label: condo.name})
        })
      })

  }

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
        <MButton
          onPress={() => {
            axios.get("http://localhost:8080/condominium")
                .then((data) => {
                  options = []
                  data.data.map((condo) =>{
                    options.push({value: condo.id, label: condo.name})
                    console.log(options)
                  }
                  )
            })
          }}
          color="yellow"
          value="Get condos"
        ></MButton>
        <MSelect
          options={options}
          onFocus={() => getCondos()}
        />
      </View>
    </SafeAreaView>
  );
}
