import React, { Fragment } from 'react';
import PureComponent from 'pure-component';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import { marketSelector } from 'store/market';

import styles from './GlobalMarketDetail.style';


export class GlobalMarketDetail extends PureComponent {

    constructor(props) {
        super(props);
    }

    renderMarketDetailType1() {
        const { market } = this.props;

        return (
            <View style={ styles.type1Container }>
                {/* Coin pair */}
                <View style={ styles.coinPairContainer }>
                    {/* Coin */}
                    <Text style={ styles.marketCoin }>{ market.coin.toUpperCase() }</Text>

                    {/* Currency */}
                    <Text style={ styles.marketCurrency }>{' / ' + market.currency.toUpperCase()}</Text>
                </View>

                {/* Last price */}
                <Text style={[styles.marketLastPrice, market.change >= 0 ? styles.marketLastPrice__increase : styles.marketLastPrice__decrease]}>
                    { market.last_24h_price }
                </Text>

                {/* Volume BTC */}
                <Text style={ styles.marketVolumeBTC }>{ market.volume }</Text>
            </View>
        );
    }

    renderMarketDetailType2() {
        const { market } = this.props;

        return (
            <View style={ styles.type1Container }>
                {/* Coin pair */}
                <View style={ styles.coinPairContainer }>
                    {/* Coin */}
                    <Text style={ styles.marketCoin }>{ market.coin.toUpperCase() }</Text>

                    {/* Currency */}
                    <Text style={ styles.marketCurrency }>{' / ' + market.currency.toUpperCase()}</Text>
                </View>

                {/* Last price */}
                <Text style={[styles.marketLastPrice, market.change >= 0 ? styles.marketLastPrice__increase : styles.marketLastPrice__decrease]}>
                    { market.last_24h_price }
                </Text>

                {/* 24h change */}
                <Text style={[styles.market24hChange, market.change >= 0 ? styles.market24hChange__increase : styles.market24hChange__decrease]}>
                    { market.formatedChange }
                </Text>
            </View>
        );
    }

    render() {
        const { style, market, index, type } = this.props;

        if (!market) {
            return null;
        }
        
        return (
            <View style={[styles.container, index % 2 === 0 ? styles.container__gray: null, style]}>
                {type === 1 ? this.renderMarketDetailType1() : null}
                {type === 2 ? this.renderMarketDetailType2() : null}
            </View>
        );
    }
}


GlobalMarketDetail.propTypes = {
    index: PropTypes.number, // Row index
    type: PropTypes.number, // How to render market detail
    coinPair: PropTypes.string,
};
GlobalMarketDetail.defaultProps = {
    index: 0,
    type: 1,
};


const mapStateToProps = (store, ownProps) => {
    
    let market = null;
    switch (ownProps.type) {
        case 1:
            market = _.pick(marketSelector(store, ownProps.coinPair), ['coin', 'currency', 'change', 'last_24h_price', 'volume']);
            break;

        case 2:
            market = _.pick(marketSelector(store, ownProps.coinPair), ['coin', 'currency', 'change', 'last_24h_price', 'formatedChange']);
            break;
    }

    return {
        market: market,
    };
};

export default connect(mapStateToProps)(GlobalMarketDetail);
