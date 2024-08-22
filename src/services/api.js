import axios from 'axios';

//https://api.themoviedb.org/3/movie/now_playing?api_key=67516dda184a61ee9e9dd721d6ea8b99&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;