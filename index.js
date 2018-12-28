/** @format */

import { AppRegistry, YellowBox } from 'react-native';

console.ignoredYellowBox = ["Remote debugger"];
YellowBox.ignoreWarnings([
    "Warning: isMounted(...) is deprecated",
    "Module RCTImageLoader",
    "Module RNOS requires",
    "Method `jumpToIndex` is deprecated.",
    "Remote debugger is in a background tab"
]);

import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
