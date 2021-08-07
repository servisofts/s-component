import React, { Component } from 'react';
import { View, Text } from 'react-native';
import STheme from '../STheme/index';


export type SPageProps = {
    url: string,
    component: any,
    options: {
        headerShown: boolean
    }
}
export declare type SPageListProps = {
    [name in string]: SPageProps;
}
export type SNavigationProps = {
    props: {
        NavigationContainer: any,
        Stack: any,
        prefixes: [string],
        pages: { [name in string]: SPageProps }

    }
}

export default class SNavigation extends Component<SNavigationProps> {
    constructor(props: any) {
        super(props);
        this.state = {
        };

    }
    getLinking() {
        const linking = {
            prefixes: this.props.props.prefixes,
            config: {
                screens: {}
            },
        };
        var pages = this.props.props.pages;
        Object.keys(pages).map((key) => {
            linking.config.screens[key] = pages[key].url;
        })
        return linking;
    }
    getPages(Stack) {
        var pages = this.props.props.pages;
        return Object.keys(pages).map((key) => {
            return <Stack.Screen key={key} name={key} component={pages[key].component} options={{
                headerShown: false,
                ...pages[key].options
            }} />
        })
    }
    render() {
        var NavigationContainer = this.props.props.NavigationContainer;
        var Stack = this.props.props.Stack;
        return (<NavigationContainer linking={this.getLinking()} theme={{
            dark: false,
            colors: {
                background: STheme.color.background
            }
        }} >
            <Stack.Navigator>
                {this.getPages(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
        );

    }
}