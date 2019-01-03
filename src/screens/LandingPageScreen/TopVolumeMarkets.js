import React from 'react';
import PureComponent from 'pure-component';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import GlobalMartketDetail from 'components/GlobalMarketDetail';
import { topVolumeMarketsSelector } from 'store/market';
import styles from './TopVolumeMarkets.style';


export class TopVolumeMarkets extends PureComponent {

    constructor(props) {
        super(props);

        this.renderMarketDetail_keyExtractor = this.renderMarketDetail_keyExtractor.bind(this);
        this.renderMarketDetail = this.renderMarketDetail.bind(this);
    }

    renderMarketDetail_keyExtractor(item) {
        return item;
    }
    renderMarketDetail({ item: coinPair, index }) {
        return (
            <GlobalMartketDetail type={ 1 } coinPair={ coinPair } index={ index } />
        );
    }

    render() {
        const { style, topVolumeMarkets } = this.props;
        
        return (
            <View style={[styles.container, style]}>
                {/* Top volume title */}
                <Text style={ styles.title }>
                    Top volume 24h
                </Text>

                {/* Header */}
                <View style={ styles.headerContainer }>
                    {/* Pair */}
                    <Text style={[styles.headerText, styles.headerText_pair]}>
                        Pair
                    </Text>

                    {/* Last price */}
                    <Text style={[styles.headerText, styles.headerText_lastPrice]}>
                        Last price
                    </Text>

                    {/* Volume */}
                    <Text style={[styles.headerText, styles.headerText_volume]}>
                        Volume
                    </Text>
                </View>

                {/* Top volume markets list */}
                <FlatList
                    data={ topVolumeMarkets }
                    keyExtractor={ this.renderMarketDetail_keyExtractor }
                    renderItem={ this.renderMarketDetail }
                />
            </View>
        );
    }
}

const mapStateToProps = (store) => ({
    topVolumeMarkets: topVolumeMarketsSelector(store),
});

export default connect(mapStateToProps)(TopVolumeMarkets);
