import React from 'react';
import PureComponent from 'pure-component';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { marketSelector } from 'store/market';

import styles from './HotMarketDetailComponent.style';


export class HotMarketDetailComponent extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const { style, market } = this.props;

        if (!market) {
            return null;
        }
        
        return (
            <View style={[styles.container, style]}>
                <Text style={ styles.trendingMarket_coinPair }>
                    { market.coin.toUpperCase() + ' / ' + market.currency.toUpperCase() }
                </Text>
                <Text style={ styles.trendingMarket_price }>
                    { market.price }
                </Text>
                <Text style={[styles.trendingMarket_change, market.change >= 0 ? styles.trendingMarket_change__increase : styles.trendingMarket_change__decrease]}>
                    { market.formatedChange }
                </Text>
            </View>
        );
    }
}


const mapStateToProps = (store, ownProps) => ({
    market: marketSelector(store, ownProps.coinPair),
});

export default connect(mapStateToProps)(HotMarketDetailComponent);
