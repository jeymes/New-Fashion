import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from '../Pages/Home'
import {Login} from '../Pages/Login';
import {Favorite} from '../Pages/Favorite';
import {Categories} from '../Pages/Categories';
import Cart from "../Pages/Cart";

const Stack = createNativeStackNavigator();

export function StackRoutes(){
    <Stack.Navigator>
        <Stack.Screen name="cart" component={Cart} />
    </Stack.Navigator>
}

export function HomeNavigation() {
    return (
        <Stack.Navigator screenOptions={
            {headerShown: false}
        }>
            <Stack.Screen name='Home'
                component={Home}/>
        </Stack.Navigator>
    )
}
export function LoginNavigation() {
    return (
        <Stack.Navigator screenOptions={
            {headerShown: false}
        }>
            <Stack.Screen name='Login'
                component={Login}/>
        </Stack.Navigator>
    )
}
export function FavoriteNavigation() {
    return (
        <Stack.Navigator screenOptions={
            {headerShown: false}
        }>
            <Stack.Screen name='Favorite'
                component={Favorite}/>
        </Stack.Navigator>
    )
}
export function CategoriesNavigation() {
    return (
        <Stack.Navigator screenOptions={
            {headerShown: false}
        }>
            <Stack.Screen name='Categories'
                component={Categories}/>
        </Stack.Navigator>
    )
}
