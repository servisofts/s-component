import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SView, SText, STheme } from 'servisofts-component'
import { Server } from 'servisofts-socket';


export default class Install extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <SView
                col={"xs-12"}
                style={{
                    flex: 1,
                }}>
                <SText>Install</SText>
            </SView>
        );
    }
}
