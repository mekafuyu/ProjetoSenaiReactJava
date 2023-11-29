import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { UtilsContext } from "./src/Contexts/UtilsContext";

import { Index } from "./src/Pages/Index";
import { Login } from "./src/pages/Login";
import { Cadastro } from "./src/Pages/Cadastro";
import { ViewCondos } from "./src/Pages/ViewCondos";
import { NewCondo } from "./src/Pages/NewCondo";

import { HomeResident } from "./src/Pages/ResidentPages/HomeResident";
import { ReservarChurrasqueira } from "./src/Pages/ResidentPages/ReservarChurrasqueira";

import { HomeFunc } from "./src/Pages/FuncPages/HomeFunc"
import { VisualizarCondoResident } from "./src/Pages/FuncPages/VisualizarCondoResident";
import { CadBbqVaga } from "./src/Pages/FuncPages/CadBbqVaga";
import { ViewBbqVaga } from "./src/Pages/FuncPages/ViewBbqVaga";

export default function App() {
  const [utils, setUtils] = useState();

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <UtilsContext.Provider value={{ utils, setUtils }}>
        <Stack.Navigator
          screenOptions={{ cardStyle: { backgroundColor: "white" } }}
        >
          <Stack.Screen name="Index" component={Index} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="NewCondo" component={NewCondo} />
          <Stack.Screen name="ViewCondos" component={ViewCondos} />
          <Stack.Screen name="HomeResident" component={HomeResident} />
          <Stack.Screen name="ReservarChurrasqueira" component={ReservarChurrasqueira} />
          <Stack.Screen name="HomeFunc" component={HomeFunc} />
          <Stack.Screen name="VisualizarCondoResident" component={VisualizarCondoResident} />
          <Stack.Screen name="Cadastrar Itens" component={CadBbqVaga} />
          <Stack.Screen name="Visualizar Itens" component={ViewBbqVaga} />

        </Stack.Navigator>
      </UtilsContext.Provider>
    </NavigationContainer>
  );
}
