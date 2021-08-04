import React, { Component } from 'react';
import { View, Text } from 'react-native';

export type SViewProps = {
}

export default class SView extends Component<SViewProps> {
    constructor(props: any) {
        super(props);
        this.state = {
        };

    }
    render() {
        return (
            <View >
                <Text>SView</Text>
            </View>
        );
    }
}