import { ScaledSheet } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';

export default ScaledSheet.create({
    container: {
        backgroundColor: Colors.white,
        shadowColor: 'rgba(0, 0, 0, 0.07)',
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 20,
    },

    wrapper: {
        height: '62@s',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Sizes.paddingHorizontal,
    },
});
