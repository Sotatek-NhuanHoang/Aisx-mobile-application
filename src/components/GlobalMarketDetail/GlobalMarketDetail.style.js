import { ScaledSheet } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';


export const COIN_PAIR_FLEX = 1;
export const LAST_PRICE_FLEX = 2;
export const VOLUME_BTC_FLEX = 2;


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

    coinPairContainer: {
        flex: COIN_PAIR_FLEX,
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

    marketLastPrice: {
        flex: LAST_PRICE_FLEX,
        fontSize: FontSizes[14],
        textAlign: 'right',
    },
    marketLastPrice__decrease: {
        color: Colors.red,
    },
    marketLastPrice__increase: {
        color: Colors.green,
    },

    marketVolumeBTC: {
        fontSize: FontSizes[14],
        flex: VOLUME_BTC_FLEX,
        color: Colors.gray33,
        textAlign: 'right',
    },
});
