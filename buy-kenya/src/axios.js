import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/buy-kenya/us-central1/api'
});

export default instance;