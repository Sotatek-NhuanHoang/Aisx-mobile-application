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
import TopChangeMarkets from './TopChangeMarkets';
import { MARKET_GET_DATA, MARKET_GET_TRENDING_MARKETS } from 'store/market';

import styles from './LandingPageScreen.style';


export class LandingPageScreen extends PureComponent {

    constructor(props) {
        super(props);

        this.props.navigation.addListener('willFocus', async () => {
            await this.props.getMarketsData();
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
                        <ImageSliderComponent style={ styles.ImageSliderComponent } />
                        
                        {/* Hot markets */}
                        <HotMarketsComponent style={ styles.HotMarketsComponent } />

                        {/* Menu bar */}
                        <MenuBarComponent style={ styles.MenuBarComponent } />
                    </View>

                    {/* Top markets */}
                    <View style={ styles.topMarketsContainer }>
                        {/* Top volume markets */}
                        <TopVolumeMarkets />

                        {/* Top change markets */}
                        <TopChangeMarkets />
                    </View>
                </ScrollView>
            </View>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    getMarketsData: () => {
        return dispatch(MARKET_GET_DATA());
    },
    getTrendingMarkets: () => {
        return dispatch(MARKET_GET_TRENDING_MARKETS());
    },
});

export default connect(null, mapDispatchToProps)(LandingPageScreen);
