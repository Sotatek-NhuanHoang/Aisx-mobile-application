import BaseApi from './BaseApi';


const TrendingApi = {
    getTrendingMarkets: () => {
        return BaseApi.GET('/symbols/trending');
    },
};


export default TrendingApi;
