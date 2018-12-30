import { ScaledSheet } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';

export default ScaledSheet.create({
    container: {
        flex: 1,
        height: '90@s',
        borderRadius: '5@s',
        backgroundColor: '#1a3d54',
        justifyContent: 'center',
        paddingHorizontal: Sizes.s4,
    },
    trendingMarket_coinPair: {
        fontSize: FontSizes[14],
        color: Colors.graycc,
    },
    trendingMarket_price: {
        marginTop: '2@s',
        fontSize: FontSizes[15],
        color: Colors.white,
    },
    trendingMarket_change: {
        marginTop: Sizes.s1,
        fontSize: FontSizes[14],
        fontWeight: 'bold',
        color: Colors.red,
    },
});
