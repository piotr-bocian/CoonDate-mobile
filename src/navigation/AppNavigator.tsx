import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginRegister } from '../screens/Auth/LoginRegister';
import HomeScreen from '../screens/Home/HomeScreen';

export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
    const [isLogged, setIsLogged] = useState(false);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {!isLogged ? (
                    <Stack.Screen name="Login">
                        {() => <LoginRegister onSignIn={() => setIsLogged(true)} />}
                    </Stack.Screen>
                ) : (
                    <Stack.Screen name="Home">
                        {() => <HomeScreen onSignOut={() => setIsLogged(false)} />}
                    </Stack.Screen>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
