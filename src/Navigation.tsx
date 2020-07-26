import {createStackNavigator} from "@react-navigation/stack";
import * as React from "react";
import LoginController from "screens/home/LoginController";
import DetailScreenController from "screens/detail/DetailController";

export const navigationRef: any = React.createRef();
export function navigate(parameters: { name: any, params: any }) {
    let {name, params} = parameters;
    navigationRef.current?.navigate(name, params);
}

const AppStack = createStackNavigator();
export const AppStackScreen: any = () => {
    return (<AppStack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
            shadowOpacity: 0
        },
        headerTintColor: "rgba(0, 0, 0, 0.88)"
    }}>
        <AppStack.Screen name="Home" component={LoginController} options={{}}/>
        <AppStack.Screen name="Detail" component={DetailScreenController} options={{}}/>
    </AppStack.Navigator>)
};
