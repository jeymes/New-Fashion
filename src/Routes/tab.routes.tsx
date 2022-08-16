import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

const {Screen, Navigator} = createBottomTabNavigator();

import Home  from '../Pages/Home';
import { Login } from '../Pages/Login';
import { Search } from '../Pages/Search';
import { Shopping } from '../Pages/Shopping';

export function TabRoutes() {
    return (
        <Navigator screenOptions={{
            tabBarActiveTintColor: '#DC143C',
            tabBarInactiveTintColor: 'gray',
            headerShown: false
            }}
            >
            <Screen name="home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) =>(
                        <MaterialIcons
                        name='home'
                        color={color}
                        size={size} />
                    )
                }}  />

            <Screen name="screenB"
                component={Search}
                options={{
                    tabBarLabel: 'Favorito',
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons
                        name='favorite'
                        color={color}
                        size={size}  />
                    )
                }}  />
                <Screen name="shopping"
                component={Shopping}
                options={{
                    tabBarLabel: 'Shopping',
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons
                        name='shopping-bag'
                        color={color}
                        size={size}  />
                    )
                }}  />
                <Screen name="person"
                component={Login}
                options={{
                    tabBarLabel: 'Login',
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons
                        name='person'
                        color={color}
                        size={size}  />
                    )
                }}  />
        </Navigator>
    )
}