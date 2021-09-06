import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';

// import Arrow, { ReactComponent as ArrowW } from '../../assets/arrow.svg';

export type SIconProps = {
    name?: "arrow",
    src?: any,
    icon?: any,
    iconw?: any,
    width?: number,
    height?: number,
    fill?: string,
}

export default class SIcon extends Component<SIconProps> {
    constructor(props: any) {
        super(props);
        this.state = {
        };

    }
    render() {
        if (!this.props.icon) return <View />
        var Icon = this.props.icon;
        // if (!this.props.name) {
        //     if (!this.props.src) {
        //         return <Text>NOT FOUND</Text>
        //     }
        //     Icon = this.props.src;
        //     console.log(Icon)
        // } else {
        //     switch (this.props.name) {
        //         case "arrow":
        //             Icon = require("../assets/svg/arrow.svg");
        //             break;
        //         default:
        //             return <Text>NOT FOUND</Text>
        //     }
        // }

        if (Platform.OS == "web") {
            var ArrowW = this.props.iconw;
            return (
                // <img src={Icon.default} height={"100%"} width={"100%"} {...this.props} />
                <ArrowW height={0} width={"100%"} {...this.props} />
            );
        }
        return (
            <Icon
                {...this.props}
                style={{ width: "100%", ...this.props }} />
        );
    }
}
