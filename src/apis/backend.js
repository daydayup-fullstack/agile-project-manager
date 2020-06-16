import axios from "axios";


const baseUrl = "https://us-central1-agilo-47e6e.cloudfunctions.net/api"

export default axios.create({
    baseURL: baseUrl
})