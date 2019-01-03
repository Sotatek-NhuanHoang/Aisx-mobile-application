import {
    setCustomScrollView,
    setCustomText,
    setCustomTextInput,
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
