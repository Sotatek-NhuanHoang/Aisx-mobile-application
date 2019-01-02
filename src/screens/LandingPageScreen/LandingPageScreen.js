import React from 'react';
import PureComponent from 'pure-component';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import GlobalHeader from 'components/GlobalHeader';
import NotificationComponent from './NotificationComponent';
import ImageSliderComponent from './ImageSliderComponent';
import HotMarketsComponent from './HotMarketsComponent';
import MenuBarComponent from './MenuBarComponent';
import TopVolumeMarkets from './TopVolumeMarkets';
import { MARKET_GET_PRICES, MARKET_GET_MASTERDATA, MARKET_GET_TRENDING_MARKETS } from 'store/market';

import styles from './LandingPageScreen.style';
import { MenuBarHeight } from './MenuBarComponent.style';
import { Sizes } from 'styles/variables';


export class LandingPageScreen extends PureComponent {

    constructor(props) {
        super(props);

        this.props.navigation.addListener('willFocus', async () => {
            await this.props.getMasterdata();
            await this.props.getPrices();
            await this.props.getTrendingMarkets();
        });
    }

    render() {
        return (
            <View style={ styles.container }>
                <GlobalHeader style={{ height: 0, }} />

                <ScrollView>
                    {/* Header */}
                    <View style={ styles.headerContainer }>
                        {/* Notification */}
                        <NotificationComponent />

                        {/* Image slider */}
                        <ImageSliderComponent style={{ marginTop: Sizes.s2, }} />
                        
                        {/* Hot markets */}
                        <HotMarketsComponent />

                        {/* Menu bar */}
                        <MenuBarComponent style={{
                            position: 'absolute',
                            bottom: -MenuBarHeight / 2,
                            left: 0,
                            right: 0,
                        }} />
                    </View>

                    {/* Top markets */}
                    <View style={ styles.topMarketsContainer }>
                        {/* Top volume markets */}
                        <TopVolumeMarkets />

                        {/* Top change markets */}
                    </View>
                </ScrollView>
            </View>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    getPrices: () => {
        return dispatch(MARKET_GET_PRICES());
    },
    getTrendingMarkets: () => {
        return dispatch(MARKET_GET_TRENDING_MARKETS());
    },
    getMasterdata: () => {
        return dispatch(MARKET_GET_MASTERDATA());
    },
});

export default connect(null, mapDispatchToProps)(LandingPageScreen);
