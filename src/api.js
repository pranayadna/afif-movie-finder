import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL

export const getMovieList = async () => {
    const movies = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`)
    return movies.data.results
}

export const searchQuery = async (q) => {
    const search = await axios.get(`${baseUrl}/search/movie?page=1&query=${q}&api_key=${apiKey}`)
    return search.data
}