import styles from "../../Themes/LightTheme";
import MButton from "../../Components/MButton";
import MTextInput from "../../Components/MTextInput";
import { SafeAreaView, Text, View } from "react-native";
import axios from "axios";
import React from "react";
import MSelect from "../../Components/MSelect";

export class ReceberVisitante extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condoOptions: [],
      residentOptions: [],
      condoSelected: "0",
      residentSelected: "",
      visitante: {cpf: "", name: "", condominiumId: "", residentId: ""}
    };
  }

  async getCondos() {
    await axios.get("http://localhost:8080/condominium").then((data) => {
      let newOptions = [];
      data.data.map((condo) => {
        newOptions.push({ value: condo.id, label: condo.name });
      });
      this.setState({ ...this.state, condoOptions: newOptions });
    });
  }

  async getResidents() {
    await axios
      .get(`http://localhost:8080/resident/condo/${this.state.condoSelected}`)
      .then((res) => {
        let newResidents = [];
        res.data.map((resident) => {
          newResidents.push({
            label: `${resident.name} - ${resident.cpf}`,
            value: resident.id,
          });
        });
        this.setState({ ...this.state, residentOptions: newResidents });
      });
  }

  async tryVisitante() {
    if(this.state.visitante.condominiumId == "",
      this.state.visitante.residentId == "",
      this.state.visitante.name == "",
      this.state.visitante.cpf == "")
      return;

    await axios
      .post(`http://localhost:8080/visitante`, this.state.visitante)
      .then(() => this.props.navigation.navigate("HomeFunc"))

  }

  async componentDidMount() {
    await this.getCondos();
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <MSelect
            label="Condomínio:"
            width="100"
            options={this.state.condoOptions}
            onChange={async (option) => {
              await this.setState({
                ...this.state,
                condoSelected: option.value,
                visitante: {...this.state.visitante, condominiumId: option.value}
              });
              await this.getResidents();
            }}
          />

          <MSelect
            label="Morador:"
            width="100"
            options={this.state.residentOptions}
            onChange={async (option) => {
              await this.setState({
                ...this.state,
                residentSelected: option.value,
                visitante: {...this.state.visitante, residentId: option.value}
              });
            }}
          />

          <MTextInput
            label="Nome:"
            value={this.state.visitante.name}
            setValue={(text) => {
              this.setState({
                ...this.state,
                visitante: { ...this.state.visitante, name: text },
              });
            }}
          />

          <MTextInput
            label="Cpf:"
            value={this.state.visitante.cpf}
            setValue={(text) => {
              this.setState({
                ...this.state,
                visitante: { ...this.state.visitante, cpf: text },
              });
            }}
          />

          <MButton
            onPress={async () => {
              await this.tryVisitante();
            }}
            width="100"
            value="Visitante"
          ></MButton>

        </View>
      </SafeAreaView>
    );
  }
}
