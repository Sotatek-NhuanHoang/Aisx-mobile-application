import React, { PureComponent } from 'react';
import { View, ImageBackground, StatusBar, Platform, Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { setCustomText, setCustomTextInput } from 'react-native-global-props';

import AisxIcon from 'aisx-icon';
import GlobalLoc from 'components/GlobalLoc';

console.log(GlobalLoc)

import store from 'store';


export default class App extends PureComponent {

    render() {
        return (
            <Provider store={ store }>
                <View>
                    <Text>Nhuan</Text>
                    <AisxIcon name="account" />
                    <GlobalLoc locKey="app.title" />
                </View>
            </Provider>
        );
    }
}
