import { create } from 'apisauce';
import Config from 'react-native-config';


const Api = create({
    baseURL: Config.API_URL + '/api/' + Config.API_VERSION,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },  
});


const BaseApi = {
    GET: async (endPoint, params = {}) => {
        try {
            const response = await Api.get(endPoint, params);

            if (!response.ok) {
                throw new Error(response.data.message);
            }

            return response.data;
        } catch (error) {
            console.log(error.message);
            throw error;
        }
    },

    POST: () => {},

    PUT: () => {},

    DELETE: () => {},
};


export default BaseApi;
