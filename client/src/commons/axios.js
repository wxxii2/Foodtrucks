import _axios from 'axios';

const axios = baseUrl => {
    const instance = _axios.create({
        // baseURL: baseUrl || 'http://localhost'
        baseURL: baseUrl || 'https://fooodtruck.herokuapp.com'
    });
    return instance;
};

export { axios };

export default axios();