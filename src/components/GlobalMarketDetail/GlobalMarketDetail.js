import React, { Fragment } from 'react';
import PureComponent from 'pure-component';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import { marketSelector, priceUsdSelector } from 'store/market';

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
            <View style={ styles.type2Container }>
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

    renderMarketDetailType3() {
        const { market, priceUsd } = this.props;

        return (
            <View style={ styles.type3Container }>
                {/* Coin pair and volume */}
                <View style={ styles.coinPairAndVolumeContainer }>
                    {/* Coin pair */}
                    <View style={ styles.coinPairContainer__type3 }>
                        {/* Coin */}
                        <Text style={ styles.marketCoin }>{ market.coin.toUpperCase() }</Text>

                        {/* Currency */}
                        <Text style={ styles.marketCurrency }>{' / ' + market.currency.toUpperCase()}</Text>
                    </View>

                    {/* Volume */}
                    <Text style={ styles.marketVolumeBTC__type3 }>Volume { market.volume }</Text>
                </View>

                {/* Last price and price usd */}
                <View style={ styles.lastPriceAndPriceUsdContainer }>
                    {/* Last price */}
                    <Text style={[styles.marketLastPrice__type3, market.change >= 0 ? styles.marketLastPrice__increase : styles.marketLastPrice__decrease]}>
                        { market.last_24h_price }
                    </Text>

                    {/* Price usd */}
                    <Text style={ styles.marketPriceUsd }>
                        { priceUsd }
                    </Text>
                </View>

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
                {type === 3 ? this.renderMarketDetailType3() : null}
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

        case 3:
            market = marketSelector(store, ownProps.coinPair);
            break;
    }

    return {
        market: market,
        priceUsd: priceUsdSelector(store, ownProps.coinPair),
    };
};

export default connect(mapStateToProps)(GlobalMarketDetail);
