import React, { Component } from 'react';
import { View, Text } from 'react-native';
import STheme from '../STheme/index';


export type STextProps = {

}

export default class SText extends Component<STextProps> {
    constructor(props: any) {
        super(props);
        this.state = {
        };

    }
    render() {
        return (
            <View >
                <Text style={{ color: STheme.color.secondary }}>{this.props.children}</Text>
            </View>
        );

    }
}