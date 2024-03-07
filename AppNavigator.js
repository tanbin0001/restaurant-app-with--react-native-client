import React from "react";
 

import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./app/screens/HomeScreen";

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
    // <HomeScreen/>
  );
};



export default AppNavigator;
