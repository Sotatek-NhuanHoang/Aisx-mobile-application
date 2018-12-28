import { ScaledSheet } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';

export default ScaledSheet.create({
    container: {
        alignItems: 'center',
    },

    buttonIcon: {
        fontSize: '28@s',
        color: Colors.gray99,
    },
    buttonIcon__active: {
        color: Colors.yellow,
    },

    buttonLabel: {
        marginTop: '3@s',
        fontSize: FontSizes[12],
        color: Colors.gray99,
    },
    buttonLabel__active: {
        color: Colors.yellow,
    },
});
