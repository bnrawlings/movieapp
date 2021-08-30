// console.log ("I'm connected")

const apiKey = "a8956cc"
const omdbUrl = `https://www.omdbapi.com/?apikey=${apiKey}`


const movieDeckcon = document.querySelector(".movieDeck")
const searchButton = document.querySelector(".searchButton")

async function getMovies(){
    const input = document.querySelector(".inputField").value;
    const movieData = await fetch(omdbUrl + `&s=${input}`);
    const jsonMovies = await movieData.json();
    // console.log(jsonMovies)
    
  for (const movie of jsonMovies.Search){
    const movieDeck = document.createElement("div");
    const movieTitle = document.createElement("h3");
        const movieImg = document.createElement("img");
      //  console.log(movie)
        movieTitle.innerHTML = movie.Title;
        movieImg.src = movie.Poster;
        movieDeck.append(movieImg, movieTitle);
        movieDeckcon.append(movieDeck);
      }
  }
  


searchButton.addEventListener("click", () => getMovies());
