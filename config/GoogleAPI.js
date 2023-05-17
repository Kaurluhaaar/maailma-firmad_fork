import axios from "axios";

console.log(import.meta.env)

export const API = axios.create({
    baseURL: import.meta.env.VITE_X_GOOGLE_BASE_URL,
    headers: {
        'X-RapidAPI-Key':  import.meta.env.VITE_X_GOOGLE_KEY,
/*         'X-RapidAPI-Host': import.meta.env.VITE_X_GOOGLE_KEYHOST */
      }
})