import { create } from 'apisauce';
import Config from 'react-native-config';


const Api = create({
    baseURL: Config.API_URL,
});


const BaseApi = {
    GET: () => {},

    POST: () => {},

    PUT: () => {},

    DELETE: () => {},
};


export default BaseApi;
