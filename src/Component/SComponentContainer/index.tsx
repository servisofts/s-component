import * as React from 'react';
import { View} from 'react-native';

export type SComponentContainerProps = {
}

export default class SComponentContainer extends React.Component<SComponentContainerProps> {
    constructor(props:any) {
        super(props);
        this.state = {
        };

    }
    render() {
        return (
            <View
                style={{
                    width: "100%",
                    height: "100%"
                }}
                onLayout={(evt) => {
                    console.log(evt.nativeEvent.layout)
                }}>
                {this.props.children}
            </View>
        );
    }
}