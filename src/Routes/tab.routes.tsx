import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, Entypo  } from '@expo/vector-icons';
import { Favorite } from '../Pages/Favorite';
import { Categories } from '../Pages/Categories';
import { Config } from '../Pages/Config';
import  Home  from '../Pages/Home';

const {Screen, Navigator} = createBottomTabNavigator();


export function TabRoutes() {
    return (
        
        <Navigator screenOptions={{
            tabBarActiveTintColor: '#DC143C',
            tabBarInactiveTintColor: 'gray',
            headerShown: false }} >

                

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
                    }}></Screen>

            <Screen 
            
            name="favoritos"
                component={Favorite}
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons
                        name='favorite'
                        color={color}
                        size={size}  />
                    )
                }}  ></Screen>

                <Screen name="categories"
                component={Categories}
                options={{
                    tabBarLabel: 'Categorias',
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons
                        name='grid-view'
                        color={color}
                        size={size}  />
                    )
                }}  ></Screen>
                <Screen name="config"
                component={Config}
                options={{
                    tabBarLabel: 'Configurações',
                    tabBarIcon: ({color, size}) => (
                        <Entypo
                        name='cog'
                        color={color}
                        size={size}  />
                    )
                }}  ></Screen>
        </Navigator>
    )
}