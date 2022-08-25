import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Cart from "../Pages/Cart";
import {TabRoutes} from "./tab.routes";
import {Login} from "../Pages/Login";
import {Masculino} from "../Pages/ScreenCategories/Masculino";
import {Feminino} from "../Pages/ScreenCategories/Feminino";
import {Kids} from "../Pages/ScreenCategories/Kids";
import {Beleza} from "../Pages/ScreenCategories/Beleza";
import {Acessorios} from "../Pages/ScreenCategories/Acessorios";
import {Unisex} from "../Pages/ScreenCategories/Unisex";
import {Sports} from "../Pages/ScreenCategories/Sports";
import {PagProductor} from "../Pages/PagProductor";
import {Notifications} from "../Pages/Notificatios";
import { Saude } from "../Pages/ScreenCategories/Saude";
import { Mochilas } from "../Pages/ScreenCategories/Mochilas";
import { Pets } from "../Pages/ScreenCategories/Pets";
import { Joias } from "../Pages/ScreenCategories/Joias";
import { Calcados } from "../Pages/ScreenCategories/Calcados";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
    const Stack = createNativeStackNavigator();
    return (<Stack.Navigator screenOptions={
        {headerShown: false}
    }>
        <Stack.Screen name="login"
            component={Login}></Stack.Screen>

        <Stack.Screen name="tab"
            component={TabRoutes}></Stack.Screen>

        {/* Notifications & Carrinho */}
        <Stack.Screen name="cart"
            component={Cart}></Stack.Screen>

        <Stack.Screen name="notifications"
            component={Notifications}></Stack.Screen>

        {/* PagProductor > */}

        <Stack.Screen name="pagProductor"
            component={PagProductor}></Stack.Screen>

        {/* Categorias > */}
        <Stack.Screen name="masculino"
            component={Masculino}></Stack.Screen>

        <Stack.Screen name="feminino"
            component={Feminino}></Stack.Screen>

        <Stack.Screen name="kids"
            component={Kids}></Stack.Screen>

        <Stack.Screen name="beleza"
            component={Beleza}></Stack.Screen>

        <Stack.Screen name="acessorios"
            component={Acessorios}></Stack.Screen>

        <Stack.Screen name="unisex"
            component={Unisex}></Stack.Screen>

        <Stack.Screen name="sports"
            component={Sports}></Stack.Screen>

        <Stack.Screen name="saude"
            component={Saude}></Stack.Screen>

        <Stack.Screen name="pets"
            component={Pets}></Stack.Screen>

        <Stack.Screen name="mochilas"
            component={Mochilas}></Stack.Screen>

        <Stack.Screen name="joias"
            component={Joias}></Stack.Screen>
            
             <Stack.Screen name="calcados"
            component={Calcados}></Stack.Screen>


    </Stack.Navigator>)
}
