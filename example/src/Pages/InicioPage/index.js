import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SView, SText, STheme } from 'servisofts-component'
import { Server } from 'servisofts-socket';


export default class InicioPage extends Component {
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
                    alignItems: "center"
                }}>
                <SText>Servisofts</SText>
                <SText>servisofts - components</SText>
                <SView onPress={() => {
                    this.props.navigation.navigate("docs")
                }}>
                    <SText>Documentacion</SText>
                </SView>
            </SView>
        );
    }
}
