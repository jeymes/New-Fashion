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
import {Saude} from "../Pages/ScreenCategories/Saude";
import {Mochilas} from "../Pages/ScreenCategories/Mochilas";
import {Pets} from "../Pages/ScreenCategories/Pets";
import {Joias} from "../Pages/ScreenCategories/Joias";
import {Calcados} from "../Pages/ScreenCategories/Calcados";
import {Cadastro} from "../Pages/Cadastro";


const Stack = createNativeStackNavigator();

export function StackRoutes() {
    const Stack = createNativeStackNavigator();
    return (<Stack.Navigator screenOptions={
        {headerShown: true}
    }>


        <Stack.Screen options={
                {headerShown: false}
            }
            name="tab"
            component={TabRoutes}></Stack.Screen>

        <Stack.Screen options={
                {headerShown: false}
            }
            name="login"
            component={Login}></Stack.Screen>

        <Stack.Screen options={
                {headerShown: false}
            }
            name="cadastro"
            component={Cadastro}></Stack.Screen>

        {/* Notifications & Carrinho */}
        <Stack.Screen name="cart"
            options={
                {headerTitle: 'Carrinho'}
            }
            component={Cart}></Stack.Screen>

        <Stack.Screen name="notifications"
            options={
                {headerTitle: 'Notificações'}
            }
            component={Notifications}></Stack.Screen>

        {/* PagProductor > */}

        <Stack.Screen name="pagProductor"
            component={PagProductor}
            options={
                {headerTitle: 'Produto'}
        }></Stack.Screen>

        {/* Categorias > */}
        <Stack.Screen name="masculino"
            options={
                {headerTitle: 'Masculino'}
            }
            component={Masculino}></Stack.Screen>

        <Stack.Screen name="feminino"
            options={
                {headerTitle: 'Feminino'}
            }
            component={Feminino}></Stack.Screen>

        <Stack.Screen name="kids"
            options={
                {headerTitle: 'Kids'}
            }
            component={Kids}></Stack.Screen>

        <Stack.Screen name="beleza"
            options={
                {headerTitle: 'Beleza'}
            }
            component={Beleza}></Stack.Screen>

        <Stack.Screen name="acessorios"
            options={
                {headerTitle: 'Acessorios'}
            }
            component={Acessorios}></Stack.Screen>

        <Stack.Screen name="unisex"
            options={
                {headerTitle: 'Unisex'}
            }
            component={Unisex}></Stack.Screen>

        <Stack.Screen name="sports"
            options={
                {headerTitle: 'Sports'}
            }
            component={Sports}></Stack.Screen>

        <Stack.Screen name="saude"
            options={
                {headerTitle: 'Saude'}
            }
            component={Saude}></Stack.Screen>

        <Stack.Screen name="pets"
            options={
                {headerTitle: 'Pets'}
            }
            component={Pets}></Stack.Screen>

        <Stack.Screen name="mochilas"
            options={
                {headerTitle: 'Mochilas'}
            }
            component={Mochilas}></Stack.Screen>

        <Stack.Screen name="joias"
            options={
                {headerTitle: 'Joias'}
            }
            component={Joias}></Stack.Screen>

        <Stack.Screen name="calcados"
            options={
                {headerTitle: 'Calcados'}
            }
            component={Calcados}></Stack.Screen>


    </Stack.Navigator>)
}
