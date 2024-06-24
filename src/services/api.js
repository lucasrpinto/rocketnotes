import axios from "axios";

export const api = axios.create({
    // URL da API Online (Não usar essa URL por nada seu animal)
    baseURL: "https://api-notes-t11r.onrender.com"
     //baseURL: "http://localhost:3333"
})

