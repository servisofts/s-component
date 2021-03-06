import React, { Component } from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import SText from '../SText/index';
import SGrid from '../SGrid/index';
import STheme, { SThemeColors, SThemeProps } from '../STheme/index';
import DebugBar from './DebugBar/index';

export type SComponentContainerProps = {
    theme: SThemeProps,
    debug: boolean
}

export default class SComponentContainer extends Component<SComponentContainerProps> {
    private static Instance: SComponentContainer = null;
    private static GridListen: { [key in string]: SGrid } = {};
    public static registerGrid(key: string, grid: SGrid) {
        if (!this.Instance) return;
        this.GridListen[key] = grid;
        grid.changeMedida(this.Instance.state.medida);
    }
    public static removeGrid(key: string) {
        if (!this.Instance) return;
        delete this.GridListen[key];
    }
    layout;
    state;
    constructor(props) {
        super(props);
        this.state = {
            layout: {},
            medida: "xs",
            theme: null,
            barStyle: "default",
        };
        SComponentContainer.Instance = this;
    }
    onChangeSize(layout) {
        this.layout = layout;
        var curMedida = "";
        if (layout.width >= 1200) {
            curMedida = "xl";
        } else if (layout.width >= 992) {
            curMedida = "lg"
        } else if (layout.width >= 768) {
            curMedida = "md"
        } else if (layout.width >= 576) {
            curMedida = "sm"
        } else {
            curMedida = "xs"
        }
        if (this.state.medida != curMedida) {
            this.state.medida = curMedida;
            Object.keys(SComponentContainer.GridListen).map((key) => {
                var item = SComponentContainer.GridListen[key];
                item.changeMedida(this.state.medida);
            })
        }

    }
    getContenido() {
        if (!this.state.theme) return <View />
        return (
            <View style={{
                width: "100%",
                flex: 1,
                backgroundColor: this.state.theme.barColor
            }} >
                <SafeAreaView style={{
                    width: '100%',
                    flex: 1,
                }}>
                    <View style={{
                        width: "100%",
                        flex: 1,
                    }} >
                        <StatusBar barStyle={this.state.theme.barStyle} animated backgroundColor={this.state.theme.barColor} />
                        <DebugBar debug={this.props.debug} />
                        <View style={{
                            width: "100%",
                            flex: 1,
                        }} onLayout={(evt) => {
                            // this.setState({ layout: evt.nativeEvent.layout })
                            this.onChangeSize(evt.nativeEvent.layout);
                        }}>

                            {this.props.children}
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        )
    }
    render() {
        return (
            <STheme {...this.props.theme} onLoad={(color: SThemeColors) => {
                if (this.state.theme != color) {
                    this.setState({ theme: color });
                }
            }}>
                {this.getContenido()}
            </STheme>

        );

    }
}