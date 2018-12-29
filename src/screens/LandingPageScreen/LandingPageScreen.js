import React from 'react';
import PureComponent from 'pure-component';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import GlobalHeader from 'components/GlobalHeader';
import NotificationComponent from './NotificationComponent';
import ImageSliderComponent from './ImageSliderComponent';
import HotMarketsComponent from './HotMarketsComponent';
import { MARKET_GET_PRICES, MARKET_GET_MASTERDATA, MARKET_GET_TRENDING_MARKETS } from 'store/market';

import styles from './LandingPageScreen.style';
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
            <View>
                <GlobalHeader style={{ height: 0, }} />

                {/* Header */}
                <View style={ styles.headerContainer }>
                    {/* Notification */}
                    <NotificationComponent />

                    {/* Image slider */}
                    <ImageSliderComponent style={{ marginTop: Sizes.s2, }} />
                    
                    {/* Hot markets */}
                    <HotMarketsComponent />

                    {/* Menu bar */}
                </View>
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
