const APIKEY = 'AKumwMQ3iWfQnN4qXT7OCeQgUUmvDzGL';
const img = document.querySelector('img');
const btn = document.getElementById('btn');
const searchContainer = document.querySelector('.search__container');
btn.addEventListener('click', getCats, false);
document.addEventListener('DOMContentLoaded', init);

getCats();

async function getCats() {
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${APIKEY}&s=cats`, { mode: 'cors' });
  const catData = await response.json();
  img.src = catData.data.images.original.url;
}

function init() {
  document.querySelector('.search__btn').addEventListener('click', ev => {
    ev.preventDefault();
    searchImage();
    document.getElementById('search').value = '';
  });
}

async function searchImage() {
  searchContainer.innerHTML = '';
  let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=14&q=`;
  let str = document.getElementById('search').value.trim();
  url = url.concat(str);
  console.log(url);
  const response = await fetch(url, { mode: 'cors' });
  const searchData = await response.json();
  console.log(searchData.data);
  searchData.data.forEach(element => {
    const imgHolder = document.createElement('img');
    imgHolder.src = element.images.original.url;
    imgHolder.classList.add('search__image');
    searchContainer.appendChild(imgHolder);
    console.log(imgHolder);
  });
}
