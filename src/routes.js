import { createStackNavigator } from 'react-navigation';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
    createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';


// Landing page
import LandingPageScreen from 'screens/LandingPageScreen';
import MarketsScreen from 'screens/MarketsScreen';


const Routes = createStackNavigator({
    LandingPageScreen: LandingPageScreen,
    MarketsScreen: MarketsScreen,
}, {
    initialRouteName: 'LandingPageScreen',
    headerMode: 'none',
});

export const navReducer = createNavigationReducer(Routes);
export const navMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav,
);

const mapStateToProps = (state) => ({
    state: state.nav,
});
export default connect(mapStateToProps)(reduxifyNavigator(Routes, 'root'));
