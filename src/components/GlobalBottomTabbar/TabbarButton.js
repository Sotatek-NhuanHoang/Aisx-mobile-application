import React from 'react';
import PureComponent from 'pure-component';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import AisxIcon from 'aisx-icon';

import styles from './TabbarButton.style';


class TabbarButton extends PureComponent {

    constructor(props) {
        super(props);
        this.onButtonPressed = this.onButtonPressed.bind(this);
    }

    onButtonPressed() {
        const { routeName } = this.props;
    }

    render() {
        const { routeName, nav } = this.props;
        const { index, routes } = nav;
        const isActiveButton = routes[index].routeName === routeName;

        let buttonLabel = '';
        let buttonIcon = '';

        switch (routeName) {
            case 'LandingPageScreen':
                buttonLabel = 'Home';
                buttonIcon = 'aisx';
                break;

            case 'MarketsScreen':
                buttonLabel = 'Markets';
                buttonIcon = 'market';
                break;

            case 'TradeScreen':
                buttonLabel = 'Trade';
                buttonIcon = 'trades';
                break;

            case 'FundsScreen':
                buttonLabel = 'Funds';
                buttonIcon = 'Funds';
                break;

            case 'AccountScreen':
                buttonLabel = 'Account';
                buttonIcon = 'account';
                break;
        }

        return (
            <TouchableOpacity style={ styles.container }>
                <AisxIcon name={ buttonIcon } style={[styles.buttonIcon, isActiveButton ? styles.buttonIcon__active : null]} />
                <Text style={[styles.buttonLabel, isActiveButton ? styles.buttonLabel__active : null]}>
                    { buttonLabel }
                </Text>
            </TouchableOpacity>
        );
    }
}


const mapStateToProps = ({ nav }) => ({
    nav: nav,
});

export default connect(mapStateToProps)(TabbarButton);
