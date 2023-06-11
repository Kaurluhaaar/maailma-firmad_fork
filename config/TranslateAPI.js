import axios from "axios";

export const API = axios.create({
    baseURL: import.meta.env.VITE_X_LIBRE_BASE_URL,
})
