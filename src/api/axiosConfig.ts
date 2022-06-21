import axios from "axios";
import { apiConfig } from "./apiConfig";
import qs from 'query-string'

const axiosConfig = axios.create({
    baseURL: apiConfig.base_url,
    headers: {
        'Accept': 'application/json',
    },
    paramsSerializer: (params) => qs.stringify({...params, appid: apiConfig.api_key})
})
export default axiosConfig
