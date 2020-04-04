import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Logon from './pages/Logon';
import Tables from './pages/Tables';
import Commands from './pages/Commands';
import Requests from './pages/Requests';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name = "Logon" component={Logon} />
                <AppStack.Screen name = "Tables" component={Tables} />
                <AppStack.Screen name = "Commands" component={Commands} />
                <AppStack.Screen name = "Requests" component={Requests} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}