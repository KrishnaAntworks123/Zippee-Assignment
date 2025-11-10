import axios from "axios";

async function GetCharacters(page: number) {
    const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
    return response.data;
}

async function FetchData(url: string) {
    const response = await axios.get(url);
    return response.data;
}

export { GetCharacters, FetchData };