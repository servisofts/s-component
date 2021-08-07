import React, { Component } from 'react';
import { View, Text, ViewStyle, TouchableOpacity } from 'react-native';
import { SColType, SDirectionType } from '../../Types/index';
import SGrid from '../SGrid/index';



export type SViewProps = {
    col?: SColType,
    dir?: SDirectionType,
    props?: SViewProps,
    style?: ViewStyle,
    onPress?: Function
}

export default class SView extends Component<SViewProps> {
    state: any;
    constructor(props: SViewProps) {
        super(props);
        var propsP: any = props.props;
        if (!propsP) {
            propsP = {};
        }
        this.state = {
            params: {
                col: (props.col ? props.col : propsP.col),
                dir: (!props.dir ? (!propsP.dir ? "column" : propsP.dir) : props.dir),
                style: { ...(!props.style ? {} : props.style), ...(!propsP.style ? {} : propsP.style), }
            }
        };
    }
    render() {
        var Element: any = View;
        if (this.props.onPress) {
            Element = TouchableOpacity;
        }
        return (
            <SGrid col={this.state.params.col} style={this.state.params.style}>
                <Element
                    {...this.props}
                    style={{
                        width: "100%",
                        ...(!this.state.params.style ? {} : this.state.params.style),
                        ...(this.state.params.dir != "row" ? {} : {
                            flexDirection: "row",
                            flexWrap: 'wrap',
                            alignContent: "flex-start",
                        }),
                    }}>
                    {this.props.children}
                </Element>
            </SGrid>
        );

    }
}