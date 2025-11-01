import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'zBi9eWvvQh8nO7b8DyMu8nqvzG3ec5DH';



const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);   
}

//Con async se devuelve una promesa
const getRandomGifUrl = async (): Promise<string> => {
    //await sólo funciona dentro de una función asíncrona
    const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );

    //Se desestructura para no tener data.data
    const {data} = (await response.json()) as GiphyRandomResponse;
    return data.images.original.url;
}

getRandomGifUrl().then(
    //url => createImageInsideDOM(url)
    createImageInsideDOM
);