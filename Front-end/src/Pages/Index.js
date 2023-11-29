import styles from "../Themes/LightTheme";
import MButton from "../Components/MButton";
import MSelect from "../Components/MSelect";
import { SafeAreaView, View } from "react-native";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React,{useContext} from "react";
import { UtilsContext } from "../Contexts/UtilsContext";

export class Index extends React.Component{
  static utils = UtilsContext;

  constructor(props) {
    super(props)
    this.state = {
      options: []
    }
    this.apiUrl = process.env.EXPO_PUBLIC_API_URL;
  }

  componentDidMount(){
    this.getCondos()
    console.log(UtilsContext)
  }

  async getCondos()
  {
    await axios.get("http://localhost:8080/condominium")
      .then((data) => {
        let newOptions = []
        data.data.map((condo) =>{
          newOptions.push({value: condo.id, label: condo.name})
        })
        console.log(newOptions)
        this.options = newOptions
        this.setState({...this.state, options: newOptions})
      })

  }

  render (){
    return(
      <SafeAreaView>
        <View style={styles.container}>
          <MButton
            onPress={() => {
              console.log(this.UtilsContext)
              if(!this.utils)
                this.props.navigation.navigate("Login")
            }}
            icon={faRightToBracket}
            value="Login"
          ></MButton>
          <MButton
            onPress={() => this.props.navigation.navigate("HomeFunc")}
            icon={faRightToBracket}
            value="Login Func"
          ></MButton>
          <MButton
            onPress={() => this.props.navigation.navigate("Cadastro")}
            color="yellow"
            value="Cadastro"
          ></MButton>
          <MButton
            onPress={() => this.props.navigation.navigate("NewCondo")}
            color="yellow"
            value="Novo Condominio"
          ></MButton>
          <MButton
            onPress={() => this.props.navigation.navigate("ViewCondos")}
            color="yellow"
            value="Ver Condominios"
          ></MButton>
          <MButton
            onPress={() => this.getCondos()}
            color="yellow"
            value="Get condos"
          ></MButton>
          
        </View>
      </SafeAreaView>
    )
  };
}
