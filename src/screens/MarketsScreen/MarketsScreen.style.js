import { ScaledSheet } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';

import { COIN_PAIR_VOLUME_FLEX, LAST_PRICE_PRICE_USD_FLEX, CHANGE_24H_FLEX} from 'components/GlobalMarketDetail/GlobalMarketDetail.style';

export default ScaledSheet.create({
    container: {
        flex: 1,
    },

    header_Title: {
        fontSize: FontSizes[16],
        fontWeight: 'bold',
        color: Colors.white,
    },
    header_SearchButton: {
        fontSize: '20@s',
        color: Colors.white,
    },

    tabbarContainer: {
        height: '45@s',
        flexDirection: 'row',
        backgroundColor: Colors.mainBackground,
    },
    tabContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabContainer__active: {
        backgroundColor: Colors.headerBackgroundGray,
    },
    tabIcon: {
        color: Colors.white,
        fontSize: FontSizes[16],
    },
    tabIcon__active: {
        color: Colors.yellow,
    },
    tabLabel: {
        color: Colors.white,
        fontSize: FontSizes[14],
        fontWeight: 'bold',
    },
    tabLabel__active: {
        color: Colors.yellow,
    },

    marketHeader: {
        backgroundColor: Colors.headerBackgroundGray,
        height: '38@s',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Sizes.paddingHorizontal,
    },

    marketHeader_NameVolumeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: COIN_PAIR_VOLUME_FLEX,
    },
    marketHeader_PriceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: LAST_PRICE_PRICE_USD_FLEX,
    },
    marketHeader_ChangeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: CHANGE_24H_FLEX,
    },

    marketHeader_ColContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    marketHeader_TitleText: {
        fontSize: FontSizes[13],
        color: Colors.gray99,
    },
    marketHeader_TitleText__active: {
        color: Colors.yellow,
    },
    marketHeader_TitleIcon: {
        marginLeft: '2@s',
        top: '1@s',
        fontSize: FontSizes[10],
        color: Colors.yellow,
    },
});
