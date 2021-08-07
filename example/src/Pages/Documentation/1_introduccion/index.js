import React, { Component } from 'react';
import { SView, SText, STheme } from 'servisofts-component'

export default class Introduccion extends Component {
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
                <SText>Introduccion</SText>
                <SText>Que es Servisofts Component?</SText>
                <SText>
                    SComponent es una libreria de npm para "react-native-web"
                    la cual nos facilita el desarrollo
                    proporcionando diversos componentes
                    que son utilizados a la hora de desarrollar
                    aplicaciones.
                </SText>
                <SView onPress={()=>{
                    this.props.navigation.navigate("docs/install")
                }}>
                    <SText>
                        Como usar?
                    </SText>
                </SView>

            </SView>
        );
    }
}
