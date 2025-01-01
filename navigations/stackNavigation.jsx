import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation';
import DrawerNavigation from './DrawerNavigation';
import Header from '../components/Header'; // Import Header

const Stack = createStackNavigator();

export default function StackNavigation() {
    return (
        <Stack.Navigator>
            {/* Drawer Screen: Disable the header for the Drawer screen */}
            <Stack.Screen
                name="Drawer"
                component={DrawerNavigation}
                options={{ headerShown: false }}
            />

            {/* Main Screen with the custom Header */}
            <Stack.Screen
                name="Main"
                component={BottomNavigation}
                options={{
                    header: () => <Header />  // Apply custom Header for this screen
                }}
            />
        </Stack.Navigator>
    );
}
