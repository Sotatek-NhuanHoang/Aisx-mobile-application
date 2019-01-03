import React from 'react';
import PureComponent from 'pure-component';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import GlobalMartketDetail from 'components/GlobalMarketDetail';
import { topChangeMarketsSelector } from 'store/market';
import styles from './TopChangeMarkets.style';
import AixsIcon from 'aisx-icon';


export class TopChangeMarkets extends PureComponent {

    state = {
        topChangeMarketsType: 'gainers', // Type: gainers, losers
    };

    constructor(props) {
        super(props);

        this.activeGainersMarketType = this.activeGainersMarketType.bind(this);
        this.activeLosersMarketType = this.activeLosersMarketType.bind(this);

        this.renderMarketDetail_keyExtractor = this.renderMarketDetail_keyExtractor.bind(this);
        this.renderMarketDetail = this.renderMarketDetail.bind(this);
    }

    activeGainersMarketType() {
        this.setState({
            topChangeMarketsType: 'gainers',
        });
    }

    activeLosersMarketType() {
        this.setState({
            topChangeMarketsType: 'losers',
        });
    }

    renderMarketDetail_keyExtractor(item) {
        return item;
    }
    renderMarketDetail({ item: coinPair, index }) {
        return (
            <GlobalMartketDetail type={ 2 } coinPair={ coinPair } index={ index } />
        );
    }

    render() {
        const { style, topGainersMarkets, topLosersMarkets } = this.props;
        const { topChangeMarketsType } = this.state;
        
        return (
            <View style={[styles.container, style]}>
                {/* Change markets type tab*/}
                <View style={ styles.changeMarketsTypeTabBarContainer }>
                    {/* Gainers tab */}
                    <TouchableOpacity style={ styles.changeMarketsTypeTabContainer } onPress={ this.activeGainersMarketType }>
                        <AixsIcon name="gainers" style={[styles.changeMarketsTab_Icon, topChangeMarketsType === 'gainers' ? styles.changeMarketsTab_Icon__active: null]} />
                        <Text style={[styles.changeMarketsTab_Text, topChangeMarketsType === 'gainers' ? styles.changeMarketsTab_Text__active: null]}>
                            Gainers
                        </Text>

                        {/* Active bottom border component */}
                        {topChangeMarketsType === 'gainers' ? (
                            <View style={ styles.changeMarketsTab_borderBottomContainer }>
                                <View style={ styles.changeMarketsTab_borderBottomTriangle } />
                            </View>
                        ) : null}
                    </TouchableOpacity>

                    {/* Losers tab */}
                    <TouchableOpacity style={ styles.changeMarketsTypeTabContainer } onPress={ this.activeLosersMarketType }>
                        <AixsIcon name="losers" style={[styles.changeMarketsTab_Icon, topChangeMarketsType === 'losers' ? styles.changeMarketsTab_Icon__active: null]} />
                        <Text style={[styles.changeMarketsTab_Text, topChangeMarketsType === 'losers' ? styles.changeMarketsTab_Text__active: null]}>
                            Losers
                        </Text>

                        {/* Active bottom border component */}
                        {topChangeMarketsType === 'losers' ? (
                            <View style={ styles.changeMarketsTab_borderBottomContainer }>
                                <View style={ styles.changeMarketsTab_borderBottomTriangle } />
                            </View>
                        ) : null}
                    </TouchableOpacity>
                </View>

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

                    {/* 24h Change */}
                    <Text style={[styles.headerText, styles.headerText_24hChange]}>
                        24h Change%
                    </Text>
                </View>

                {/* Top volume markets list */}
                {topChangeMarketsType === 'gainers' ? (
                    <FlatList
                        key={ topGainersMarkets.join(',') }
                        data={ topGainersMarkets }
                        keyExtractor={ this.renderMarketDetail_keyExtractor }
                        renderItem={ this.renderMarketDetail }
                    />
                ) : (
                    <FlatList
                        key={ topLosersMarkets.join(',') }
                        data={ topLosersMarkets }
                        keyExtractor={ this.renderMarketDetail_keyExtractor }
                        renderItem={ this.renderMarketDetail }
                    />
                )}

                {/* More markets */}
                <View style={ styles.moreMarketsContainer }>
                    <Text style={ styles.moreMarketsText}> More >></Text>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (store) => ({
    topGainersMarkets: topChangeMarketsSelector(store, 'gainers'),
    topLosersMarkets: topChangeMarketsSelector(store, 'losers'),
});

export default connect(mapStateToProps)(TopChangeMarkets);
