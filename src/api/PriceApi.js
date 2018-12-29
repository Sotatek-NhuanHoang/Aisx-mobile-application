import BaseApi from './BaseApi';


const PriceApi = {
    getPrices: () => {
        return BaseApi.GET('/prices');
    },
};


export default PriceApi;
