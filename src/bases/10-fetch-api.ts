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


myRequest
.then ( (response) => response.json())
.then((data) => {
    const imageUrl = data.data.images.original.url;
    console.log(imageUrl);
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    document.body.append(imgElement);
})
.catch( err => {
    console.error(err);
});