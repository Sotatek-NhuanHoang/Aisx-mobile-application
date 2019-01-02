import React, { PureComponent } from 'react';
import { View, ImageBackground, StatusBar, Platform, Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { setCustomText, setCustomTextInput } from 'react-native-global-props';

import './src/globalStyle';
import store from 'store';
import Router from './src/routes';
import GlobalBottomTabbar from 'components/GlobalBottomTabbar';


export default class App extends PureComponent {

    render() {
        return (
            <Provider store={ store }>
                <View style={{ flex: 1 }}>
                    <Router />
                    <GlobalBottomTabbar />
                </View>
            </Provider>
        );
    }
}
