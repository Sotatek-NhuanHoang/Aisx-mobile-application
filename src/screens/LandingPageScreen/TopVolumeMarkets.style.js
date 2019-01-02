import { ScaledSheet } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';

export default ScaledSheet.create({
    container: {

    },

    title: {
        fontSize: FontSizes[15],
        fontWeight: 'bold',
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
        flex: 1,
    },
    headerText_lastPrice: {
        flex: 1,
    },
    headerText_volume: {
        flex: 1,
        textAlign: 'right',
    },
});
