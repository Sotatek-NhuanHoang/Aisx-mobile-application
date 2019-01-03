import { ScaledSheet } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';

import { COIN_PAIR_FLEX, LAST_PRICE_FLEX, VOLUME_BTC_FLEX } from 'components/GlobalMarketDetail/GlobalMarketDetail.style';


export default ScaledSheet.create({
    container: {

    },

    title: {
        fontSize: FontSizes[15],
        color: Colors.white,
        textAlign: 'center',
    },

    headerContainer: {
        marginTop: Sizes.s4,
        backgroundColor: Colors.headerBackgroundGray,
        height: '38@s',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Sizes.paddingHorizontal,
    },
    headerText: {
        fontSize: FontSizes[13],
        color: Colors.gray99,
    },
    headerText_pair: {
        flex: COIN_PAIR_FLEX,
    },
    headerText_lastPrice: {
        flex: LAST_PRICE_FLEX,
        textAlign: 'right',
    },
    headerText_volume: {
        flex: VOLUME_BTC_FLEX,
        textAlign: 'right',
    },
});
