import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { 
    HomeNavigation, 
    LoginNavigation,
    CategoriesNavigation, 
    FavoriteNavigation,

} from './stack.routes';

const {Screen, Navigator} = createBottomTabNavigator();


export function TabRoutes() {
    return (
        <Navigator screenOptions={{
            tabBarActiveTintColor: '#DC143C',
            tabBarInactiveTintColor: 'gray',
            headerShown: false
            }}
            >
            <Screen name="home"
                component={HomeNavigation}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) =>(
                        <MaterialIcons
                        name='home'
                        color={color}
                        size={size} />
                    )
                }}  />

            <Screen name="Favoritos"
                component={FavoriteNavigation}
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons
                        name='favorite'
                        color={color}
                        size={size}  />
                    )
                }}  />
                <Screen name="categories"
                component={CategoriesNavigation}
                options={{
                    tabBarLabel: 'categorias',
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons
                        name='grid-view'
                        color={color}
                        size={size}  />
                    )
                }}  />
                <Screen name="person"
                component={LoginNavigation}
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