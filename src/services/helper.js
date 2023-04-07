import axios from "axios";

export const BASE_URL='http://localhost:9091';

export const axiosMethod=axios.create({
    baseURL: BASE_URL
});