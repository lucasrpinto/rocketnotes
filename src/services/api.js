import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-notes-t11r.onrender.com"
});

