import React, { Component } from 'react';

import { SNavigation } from 'servisofts-component';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import InicioPage from './InicioPage';
import { Documentation } from './Documentation';

const Stack = createStackNavigator();

export default class Pages extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SNavigation props={{
                NavigationContainer: NavigationContainer,
                Stack: Stack,
                prefixes: ["https://component.servisofts.com", "component.servisofts://"],
                pages: {
                    Inicio: { url: "", component: InicioPage },
                    ...Documentation
                }
            }} />
        );
    }
}

