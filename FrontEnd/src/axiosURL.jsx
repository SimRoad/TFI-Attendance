import axios from "axios";

const client = axios.create({
    baseURL:`http://localhost:8080`,
    httpOnly: false,
    maxAge: 60 * 20 * 1000
})

export default client