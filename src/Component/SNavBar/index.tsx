import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import STheme from '../STheme/index';
import SView from '../SView/index';
import SText from '../SText/index';
import SNavigation from '../SNavigation/index';
import { SPageProps } from '../SPage/index';
import SIcon from '../SIcon/index';


// export type SNavBarProps = {
//     title?: string,
// } & SPageProps

export default class SNavBar extends Component<SPageProps> {
    constructor(props: any) {
        super(props);
        this.state = {
        };

    }
    componentDidMount() {
        // if (Platform.OS == "web") {
        //     document.title = "Servisofts-"+this.props.title + "";
        // }
    }
    getBack() {
        if (this.props.preventBack) {
            return <View />
        }
        if (!SNavigation.lastRoute.navigation.canGoBack()) {
            if (Platform.OS == "web") {
                var locstr = window.location.pathname;
                if (locstr == "/") {
                    return <View />
                }
            } else {
                return <View />
            }
        }
        return <SView onPress={() => {
            if (!SNavigation.lastRoute.navigation.canGoBack()) {
                if (Platform.OS == "web") {
                    var locstr = window.location.pathname;
                    var locations = locstr.split("/");
                    locations = locations.slice(0, locations.length - 1);
                    var navTo = "";
                    locations.map((rout) => {
                        if (navTo) {
                            navTo += "/";
                        }
                        navTo += rout;
                    });
                    window.location.href = "./" + navTo
                } else {
                    return;
                }
            } else {
                SNavigation.goBack();
            }
        }} col={"xs-12"}>
            <SView style={{
                maxWidth: 35,
                height: 25,
            }} center>
                <SIcon width={25} height={25} name={"arrow"} />
            </SView>
        </SView>
    }
    render() {
        return (
            <SView
                col={"xs-12"}
                dir={"row"}
                style={{
                    height: 40,
                    backgroundColor: STheme.color.barColor,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <SView col={"xs-2"} center flex>
                    {this.getBack()}
                </SView>
                <SView col={"xs-8"} center flex>
                    <SText>{this.props.title}</SText>
                </SView>
                <SView col={"xs-2"} center flex onPress={() => {
                    STheme.change();
                }}>

                </SView>

            </SView>
        );

    }
}