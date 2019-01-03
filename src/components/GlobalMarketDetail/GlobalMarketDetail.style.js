import { ScaledSheet } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';


export const COIN_PAIR_FLEX = 5;
export const COIN_PAIR_VOLUME_FLEX = 12;

export const LAST_PRICE_FLEX = 10;
export const LAST_PRICE_PRICE_USD_FLEX = 10;

export const VOLUME_BTC_FLEX = 10;
export const CHANGE_24H_FLEX = 10;


export default ScaledSheet.create({
    container: {
        backgroundColor: Colors.white,
        paddingHorizontal: Sizes.paddingHorizontal,
    },
    container__gray: {
        backgroundColor: Colors.rowBackgroundGray,
    },

    type1Container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '38@s',
    },
    type2Container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '38@s',
    },
    type3Container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '55@s',
    },

    coinPairAndVolumeContainer: {
        flex: COIN_PAIR_VOLUME_FLEX,
        justifyContent: 'center',
    },

    coinPairContainer: {
        flex: COIN_PAIR_FLEX,
        flexDirection: 'row',
        alignItems: 'center',
    },
    coinPairContainer__type3: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    marketCoin: {
        fontSize: FontSizes[14],
        color: Colors.gray33,
    },
    marketCurrency: {
        fontSize: FontSizes[12],
        color: Colors.gray66,
        top: '1@s',
    },

    lastPriceAndPriceUsdContainer: {
        flex: LAST_PRICE_PRICE_USD_FLEX,
        justifyContent: 'center',
    },
    marketPriceUsd: {
        marginTop: '3@s',
        fontSize: FontSizes[13],
        color: Colors.gray66,
    },
    marketLastPrice: {
        flex: LAST_PRICE_FLEX,
        fontSize: FontSizes[14],
        textAlign: 'right',
    },
    marketLastPrice__type3: {
        fontSize: FontSizes[14],
    },
    marketLastPrice__decrease: {
        color: Colors.red,
    },
    marketLastPrice__increase: {
        color: Colors.green,
    },

    market24hChange: {
        flex: CHANGE_24H_FLEX,
        fontSize: FontSizes[14],
        textAlign: 'right',
    },
    market24hChange__decrease: {
        color: Colors.red,
    },
    market24hChange__increase: {
        color: Colors.green,
    },

    marketVolumeBTC: {
        fontSize: FontSizes[14],
        flex: VOLUME_BTC_FLEX,
        color: Colors.gray33,
        textAlign: 'right',
    },
    marketVolumeBTC__type3: {
        marginTop: '3@s',
        fontSize: FontSizes[13],
        color: Colors.gray66,
    },
});
