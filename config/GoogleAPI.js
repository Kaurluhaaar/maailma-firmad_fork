import axios from "axios";

export const API = axios.create({
    baseURL: import.meta.env.VITE_X_GOOGLE_BASE_URL,
    headers: {
        'X-GoogleAPI-Key':  import.meta.env.VITE_X_GOOGLE_KEY,
      }
})
