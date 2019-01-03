import { ScaledSheet } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';

import { COIN_PAIR_FLEX, LAST_PRICE_FLEX, CHANGE_24H_FLEX } from 'components/GlobalMarketDetail/GlobalMarketDetail.style';


export default ScaledSheet.create({
    container: {

    },

    changeMarketsTypeTabBarContainer: {
        flexDirection: 'row',
        height: '60@s',
        overflow: 'visible',
        zIndex: 2,
    },
    changeMarketsTypeTabContainer: {
        flex: 1,
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    changeMarketsTab_Icon: {
        fontSize: '20@s',
        color: Colors.graycc,
    },
    changeMarketsTab_Icon__active: {
        color: Colors.yellow,
    },
    changeMarketsTab_Text: {
        marginLeft: '10@s',
        fontSize: FontSizes[15],
        color: Colors.graycc,
        fontWeight: 'bold',
    },
    changeMarketsTab_Text__active: {
        color: Colors.yellow,
    },
    changeMarketsTab_borderBottomContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '2@s',
        backgroundColor: Colors.yellow,
        alignItems: 'center',
        overflow: 'visible',
    },
    changeMarketsTab_borderBottomTriangle: {
        bottom: '-1@s',
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: '5@s',
        borderRightWidth: '5@s',
        borderBottomWidth: '10@s',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: Colors.yellow,
        transform: [{ rotate: '180deg' }],
    },

    headerContainer: {
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
    headerText_24hChange: {
        flex: CHANGE_24H_FLEX,
        textAlign: 'right',
    },

    moreMarketsContainer: {
        height: '38@s',
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    moreMarketsText: {
        fontSize: FontSizes[13],
        color: Colors.gray99,
    },
});
