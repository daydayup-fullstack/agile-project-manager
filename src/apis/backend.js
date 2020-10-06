import axios from "axios";

// const baseUrl = "https://us-central1-agilo-47e6e.cloudfunctions.net/api"
const baseUrl = "http://localhost:5001/agilo-47e6e/us-central1/api";

export default axios.create({
    baseURL: baseUrl,
});
