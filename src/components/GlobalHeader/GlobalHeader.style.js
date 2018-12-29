import { ScaledSheet } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';

export default ScaledSheet.create({
    container: {
        backgroundColor: Colors.yellow,
    },

    wrapper: {
        width: '100%',
        height: '50@s',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Sizes.paddingHorizontal,
    },

    leftComponentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    titleComponentContainer: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    rightComponentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
});
