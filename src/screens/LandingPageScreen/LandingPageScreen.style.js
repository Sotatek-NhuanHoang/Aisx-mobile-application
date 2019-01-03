import { ScaledSheet } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';

import { MENU_BAR_HEIGHT } from './MenuBarComponent.style';

export default ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.mainBackground,
    },

    headerContainer: {
        backgroundColor: '#002841',
        paddingTop: Sizes.s2,
        paddingBottom: '60@s',
        overflow: 'visible',
        zIndex: 2,
    },

    ImageSliderComponent: {
        marginTop: Sizes.s2,
    },

    HotMarketsComponent: {
        marginTop: Sizes.s3,
    },

    MenuBarComponent: {
        position: 'absolute',
        bottom: -MENU_BAR_HEIGHT / 2,
        left: 0,
        right: 0,
    },

    topMarketsContainer: {
        paddingTop: '60@s',
    },
});
