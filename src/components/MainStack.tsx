import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import CardComponent from "./CardComponent";

const StackNavigator = stackNavigatorFactory();

/**
 * The main stack navigator for the whole app.
 */
export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Screen One"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "white",
                },
                headerShown: false,
            }}
        >
            <StackNavigator.Screen
                name="CardComponent"
                component={CardComponent}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
