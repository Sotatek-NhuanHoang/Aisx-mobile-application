import { ScaledSheet } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';

export default ScaledSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Sizes.paddingHorizontal,
    },

    notificationIcon: {
        fontSize: FontSizes[15],
        color: Colors.yellow,
    },

    notificationText: {
        marginHorizontal: '8@s',
        flex: 1,
        fontSize: FontSizes[13],
        color: Colors.graycc,
    },

    moreNotificationsIcon: {
        fontSize: FontSizes[15],
        color: Colors.yellow,
    },
});
