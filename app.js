console.log("Let's get this party started!");

const gifContainer = document.querySelector('#gifContainer');
const form = document.querySelector('#gifForm');
const deleteBtn = document.querySelector('#removeGif');


async function getGif(input){
    try{
        const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
        const gifArray = res.data.data;
        createGif(gifArray);     
    }catch(e){
        console.log(e);
        alert('gif not found!');   
    } 
   
}


function createGif(arr){
    const randGif = Math.floor(Math.random()*arr.length - 1);
    const gifImg = document.createElement('img');
    gifImg.src = arr[randGif].images.preview_gif.url;
    
    gifContainer.appendChild(gifImg);   
}

deleteBtn.addEventListener('click',function(e){
    e.preventDefault();
    gifContainer.innerHTML = '';
})

form.addEventListener('submit',function(e){
    e.preventDefault();
    const input = document.querySelector('#input');
    getGif(input.value);
   
});

