import React from 'react';
import PureComponent from 'pure-component';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { topVolumeMarketsSelector } from 'store/market';
import styles from './TopVolumeMarkets.style';


export class TopVolumeMarkets extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const { style, topVolumeMarkets } = this.props;
        console.log(topVolumeMarkets);
        
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
            </View>
        );
    }
}

const mapStateToProps = (store) => ({
    topVolumeMarkets: topVolumeMarketsSelector(store),
});

export default connect(mapStateToProps)(TopVolumeMarkets);
