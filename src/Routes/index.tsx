import { NavigationContainer } from '@react-navigation/native';
import { TabRoutes } from './tab.routes';
import { StackRoutes } from './stack.routes';

export function Routes() {
    return(
        <NavigationContainer>
         <TabRoutes/>
        </NavigationContainer>
    );
}