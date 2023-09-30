import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Configuration from "./screens/Configuration";
import Login from "./screens/Login";
import Main from "./screens/Main";
import Resume from "./screens/Resume";

const Tab = createNativeStackNavigator();

export default function Routes() {
    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Tab.Screen name="Principal" component={Main} options={{ headerShown: false }} />
            <Tab.Screen name="Configurações" component={Configuration} options={{ headerTitleAlign: 'center' }} />
            <Tab.Screen name="Resumo de Compras" component={Resume} options={{ headerTitleAlign: 'center' }} />
        </Tab.Navigator>
    </NavigationContainer>
}