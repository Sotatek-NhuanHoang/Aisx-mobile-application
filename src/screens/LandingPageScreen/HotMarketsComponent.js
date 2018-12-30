import React from 'react';
import PureComponent from 'pure-component';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import _ from 'lodash';

import HotMarketDetailComponent from './HotMarketDetailComponent';

import styles from './HotMarketsComponent.style';


export class HotMarketsComponent extends PureComponent {

    constructor(props) {
        super(props);
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
                                <View style={ styles.swiperItemContainer } key={ index }>
                                    <View style={ styles.trendingMarketSeperator } />
                                    <HotMarketDetailComponent coinPair={ trendingMarkets[index * 2] } />
                                    <View style={ styles.trendingMarketSeperator } />
                                    <HotMarketDetailComponent coinPair={ trendingMarkets[index * 2 + 1] } />
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

const mapStateToProps = ({ market }) => ({
    trendingMarkets: market.trendingMarkets,
});

export default connect(mapStateToProps)(HotMarketsComponent);
