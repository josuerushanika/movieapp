const API_KEY = `0f2c201def0837236210a419bd798f2c`
const image_path = `https://image.tmdb.org/t/p/w1280`
const trailer_path = `https://www.youtube.com/watch?v=`

const input = document.querySelector('.search input')
const btn = document.querySelector('.search button')
const main_grid_title = document.querySelector('.favorites h1')
const main_grid = document.querySelector('.favorites .movies-grid')

async function get_movie_by_search (search_term) {
    const resp = await fetch(`https://api.themoviedb.org/3//search/movie?sort_by=popularity.desc&api_key=${API_KEY}&query=${search_term}`)
    
}

//btn.addEventListener('click', add_searched_movies_to_dom)

