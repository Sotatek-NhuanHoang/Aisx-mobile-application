import { ScaledSheet, scale } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';

export const MENU_BAR_HEIGHT = scale(80);


export default ScaledSheet.create({
    container: {
        paddingHorizontal: Sizes.paddingHorizontal,
        overflow: 'visible',
    },

    wrapper: {
        paddingHorizontal: Sizes.paddingHorizontal,
        backgroundColor: Colors.yellow,
        height: MENU_BAR_HEIGHT,
        borderRadius: Sizes.s1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    menuButtonContainer: {
        alignItems: 'center',
    },
    menuButtonIcon: {
        fontSize: '30@s',
        color: Colors.white,
    },
    menuButtonLabel: {
        marginTop: '8@s',
        fontSize: FontSizes[13],
        fontWeight: 'bold',
        color: Colors.white,
    },
});
