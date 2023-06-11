import axios from "axios";

export const API = axios.create({
    baseURL: import.meta.env.VITE_X_RAPIDAPI_BASE_URL,
    headers: {
        'X-RapidAPI-Key':  import.meta.env.VITE_X_RAPIDAPI_KEY,
      }
})
