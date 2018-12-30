import { ScaledSheet } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';

export default ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },

    headerContainer: {
        backgroundColor: '#002841',
        paddingTop: Sizes.s2,
        paddingBottom: '60@s',
    },
});
