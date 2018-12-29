import BaseApi from './BaseApi';


const MasterdataApi = {
    getAll: () => {
        return BaseApi.GET('/masterdata');
    },
};


export default MasterdataApi;
