import React from 'react';
import PureComponent from 'pure-component';
import { View, Text } from 'react-native'; 

import { NavigationActions } from 'react-navigation';


export class LandingPageScreen extends PureComponent {

    componentDidMount() {
        this.props.navigation.navigate('LandingPageScreen');
    }

    render() {
        return (
            <View>
                <Text>Markets </Text>
            </View>
        );
    }
}


export default LandingPageScreen;
