import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'zBi9eWvvQh8nO7b8DyMu8nqvzG3ec5DH';

const myRequest = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

// myRequest.then ( (response) => {
//     response.json().then((data) => {
//         console.log(data);
        
//     });
// })
// .catch( err => {
//     console.error(err);
// });

const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);   
}

myRequest
.then ( (response) => response.json())
// .then((data: GiphyRandomResponse) => {
    // const imageUrl = data.data.images.original.url;
    // console.log(imageUrl);
    // const imgElement = document.createElement('img');
    // imgElement.src = imageUrl;
    // document.body.append(imgElement);
    // })
    //Hago la desestructuración para evitar data.data
.then(({data}: GiphyRandomResponse) => {
    const imageUrl = data.images.original.url;
    createImageInsideDOM(imageUrl);
})
.catch( err => {
    console.error(err);
});