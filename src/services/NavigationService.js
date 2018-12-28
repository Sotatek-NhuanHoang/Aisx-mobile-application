import { NavigationActions } from 'react-navigation';
import store from 'store';


export const navigate = (routeName, params, options = {}) => {
    const { reset } = options;

    if (reset) {
        
    } else {
        store.dispatch(
            NavigationActions.navigate({
                routeName,
                params,
            })
        );
    }
};
