import React from 'react';
import PureComponent from 'pure-component';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import _ from 'lodash';

import { scale } from 'react-native-size-matters';
import { trendingMarketsSelector } from 'store/market';

import styles from './HotMarketsComponent.style';


export class HotMarketsComponent extends PureComponent {

    constructor(props) {
        super(props);
    }

    renderTrendingMarket(index) {
        const { trendingMarkets } = this.props;
        const market = trendingMarkets[index];

        if (!market || !market.price) {
            return null;
        }

        return (
            <View style={ styles.trendingMarket }>
                <Text style={ styles.trendingMarket_coinPair }>
                    { market.coin.toUpperCase() + ' / ' + market.currency.toUpperCase() }
                </Text>
                <Text style={ styles.trendingMarket_price }>
                    { market.price.price }
                </Text>
                <Text style={ styles.trendingMarket_change }>
                    { market.price.change }
                </Text>
            </View>
        );
    }

    render() {
        const { style, trendingMarkets } = this.props;

        return (
            <View style={[styles.container, style]}>
                <View style={ styles.trendingMarketsContainer }>
                    <Swiper
                        key={ trendingMarkets.length }
                        showsButtons={ false }
                        showsPagination={ true }
                        paginationStyle={{ bottom: 0 }}
                        loop={false}
                        dot={ <View style={ styles.swiperDot } /> }
                        activeDot={ <View style={[styles.swiperDot, styles.swiperDot__active]} /> }
                    >
                        {_.map(new Array(3), (item, index) => {
                            return (
                                <View style={ styles.swiperItemContainer }>
                                    <View style={ styles.trendingMarketSeperator } />
                                    { this.renderTrendingMarket(index * 2) }
                                    <View style={ styles.trendingMarketSeperator } />
                                    { this.renderTrendingMarket(index * 2 + 1) }
                                    <View style={ styles.trendingMarketSeperator } />
                                </View>
                            );
                        })}
                    </Swiper>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (store) => ({
    trendingMarkets: trendingMarketsSelector(store),
});

export default connect(mapStateToProps)(HotMarketsComponent);
