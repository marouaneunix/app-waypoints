
import axios from "axios";


export const axiosConfig = () => {
    axios.defaults.baseURL = 'https://api.github.com';
};