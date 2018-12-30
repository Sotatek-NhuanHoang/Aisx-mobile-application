import { ScaledSheet } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';

export default ScaledSheet.create({
    container: {
        paddingHorizontal: Sizes.paddingHorizontal / 2,
    },

    trendingMarketsContainer: {
        height: '108@s',
    },

    swiperItemContainer: {
        height: '90@s',
        flexDirection: 'row',
        alignItems: 'center',
    },
    swiperDot: {
        height: '6@s',
        width: '6@s',
        backgroundColor: '#50576b',
        borderRadius: '6@s',
        marginHorizontal: '2@s',
    },
    swiperDot__active: {
        width: '13@s',
        borderRadius: '4@s',
        backgroundColor: '#d3d5da',
    },
    trendingMarketSeperator: {
        width: Sizes.paddingHorizontal / 2,
    },
});
