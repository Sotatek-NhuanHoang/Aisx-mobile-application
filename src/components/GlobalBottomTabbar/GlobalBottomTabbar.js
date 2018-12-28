import React from 'react';
import PureComponent from 'pure-component';
import { View, Text } from 'react-native'; 

import ViewContainer from 'react-native-view-container';
import TabbarButton from './TabbarButton';

import styles from './GlobalBottomTabbar.style';


export class GlobalBottomTabbar extends PureComponent {

    render() {
        return (
            <ViewContainer style={ styles.container }>
                <View style={ styles.wrapper }>
                    <TabbarButton routeName="LandingPageScreen" />
                    <TabbarButton routeName="MarketsScreen" />
                    <TabbarButton routeName="TradeScreen" />
                    <TabbarButton routeName="FundsScreen" />
                    <TabbarButton routeName="AccountScreen" />
                </View>
            </ViewContainer>
        );
    }
}


export default GlobalBottomTabbar;
