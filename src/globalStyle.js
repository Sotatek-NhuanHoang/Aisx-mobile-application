import {
    setCustomScrollView,
    setCustomText,
    setCustomTextInput,
    setCustomTouchableOpacity
} from 'react-native-global-props';


// Set scroll view
setCustomScrollView({
    alwaysBounceVertical: false,
    keyboardShouldPersistTaps: 'handled',
});

// Set text style
setCustomText({
    style: {
        fontFamily: 'Roboto',
    },
});

// Set text input style
setCustomTextInput({
    style: {
        fontFamily: 'Roboto',
    },
});

// Set touchable opacity style
setCustomTouchableOpacity({
    activeOpacity: 0.5,
});
