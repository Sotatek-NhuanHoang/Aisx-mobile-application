import React from 'react';
import PureComponent from 'pure-component';
import { View, Text } from 'react-native';

import AisxIcon from 'aisx-icon';

import styles from './MenuBarComponent.style';


export class MenuBarComponent extends PureComponent {

    constructor(props) {
        super(props);
    }

    renderMenuButton(routeName) {
        let buttonIcon = '';
        let buttonLabel = '';

        switch (routeName) {
            case 'SupportScreen':
                buttonIcon = 'support';
                buttonLabel = 'Support';
                break;
            
            case 'MarketsScreen':
                buttonIcon = 'favorites';
                buttonLabel = 'Favourites';
                break;

            case 'DepositScreen':
                buttonIcon = 'deposit';
                buttonLabel = 'Deposit';
                break;

            case 'WithdrawalScreen':
                buttonIcon = 'withdrawal';
                buttonLabel = 'Withdrawal';
                break;
        }

        return (
            <View style={ styles.menuButtonContainer }>
                <AisxIcon name={ buttonIcon } style={ styles.menuButtonIcon } />
                <Text style={ styles.menuButtonLabel }>
                    { buttonLabel }
                </Text>
            </View>
        );
    }

    render() {
        const { style } = this.props;
        
        return (
            <View style={[styles.container, style]}>
                <View style={ styles.wrapper }>
                    { this.renderMenuButton('SupportScreen') }
                    { this.renderMenuButton('MarketsScreen') }
                    { this.renderMenuButton('DepositScreen') }
                    { this.renderMenuButton('WithdrawalScreen') }
                </View>
            </View>
        );
    }
}


export default MenuBarComponent;
