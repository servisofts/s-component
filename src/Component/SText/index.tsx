import * as React from 'react';
import { View, Text } from 'react-native';

export type STextProps = {
}

export default class SText extends React.Component<STextProps> {
    constructor(props: any) {
        super(props);
        this.state = {
        };

    }
    render() {
        return (
            <View>
                <Text> SText</Text>
            </View>
        );
    }
}