function movieSelector(movies)
{
    const selectedMovies= movies.filter(movie=>movie.score>5).map(movie=>movie.title.toUpperCase());
    return selectedMovies;

}

const movies = [ { id: 1, title: "Pan's Labyrinth", score: 9 },
{ id: 37, title: "Gentelman", score: 6 },
{ id: 11, title: "Batman", score: 5 },
{ id: 44, title: "Birds of Pray", score: 1 },];


const selectedMovies=movieSelector(movies);
console.log(selectedMovies);
