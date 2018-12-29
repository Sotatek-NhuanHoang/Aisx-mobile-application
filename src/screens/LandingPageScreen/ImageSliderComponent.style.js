import { ScaledSheet } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';

export default ScaledSheet.create({
    container: {
        paddingHorizontal: Sizes.paddingHorizontal,
    },

    imageSliderContainer: {
        height: '190@s',
        borderRadius: Sizes.s1,
        overflow: 'hidden',
    },

    imageItemContainer: {
        flex: 1,
    },
    imageItem: {
        flex: 1,
        width: '100%',
        height: '100%',
    },

    imagePositionContainer: {
        position: 'absolute',
        bottom: Sizes.s2,
        left: Sizes.s2,
        height: '22@s',
        width: '22@s',
        borderRadius: '22@s',
        backgroundColor: Colors.yellow,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagePositionText: {
        fontSize: FontSizes[14],
        color: Colors.white,
    },
});
