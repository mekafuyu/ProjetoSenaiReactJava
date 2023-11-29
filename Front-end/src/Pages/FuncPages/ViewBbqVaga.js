import styles from "../../Themes/LightTheme";
import MButton from "../../Components/MButton";
import { SafeAreaView, Text, View } from "react-native";
import axios from "axios";
import React from "react";
import MSelect from "../../Components/MSelect";

export class ViewBbqVaga extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condoOptions: [],
      typeOptions: [
        {value: "vaga", label: "Vaga"},
        {value: "churrasqueira", label: "Churrasqueira"}
      ],
      condoSelected: "0",
      typeSelected: "",
      items: []
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

  async getItems() {
    await axios
      .get(`http://localhost:8080/${this.state.typeSelected}/condo/${this.state.condoSelected}`)
      .then(
        async (data) =>
          await this.setState({ ...this.state, items: data.data })
      );
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
              });
              await this.getItems();
              console.log(this.state)
            }}
          />

          <MSelect
            label="Tipo:"
            width="100"
            options={this.state.typeOptions}
            onChange={async (option) => {
              await this.setState({
                ...this.state,
                typeSelected: option.value,
              });
              await this.getItems();
              console.log(this.state)
            }}
          />

          <View style={{ marginTop: 10 }}>
            {this.state.items.map((item, index) => (
              <View
                key={index}
                index={index}
                style={{ backgroundColor: "white", margin: 5 }}
              >
                <Text>{item.number}</Text>
                {/* <MButton
                  value="remove"
                  width={50}
                  color="red"
                  onPress={async () => {
                    await axios.delete(
                      `http://localhost:8080/resident/delete/${resident.id}`
                    );
                    await this.getResidents();
                  }}
                /> */}
              </View>
            ))}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
