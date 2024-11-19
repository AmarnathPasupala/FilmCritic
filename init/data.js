let sampleData= [
    {
      image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      name: "Inception",
      year: "2010",
      genre: "Sci-Fi",
      cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
      director: "Christopher Nolan"
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      name: "The Dark Knight",
      year: "2008",
      genre: "Action",
      cast: "Christian Bale, Heath Ledger, Aaron Eckhart",
      director: "Christopher Nolan"
    },
    {
      image: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg",
      name: "The Matrix",
      year: "1999",
      genre: "Sci-Fi",
      cast: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
      director: "The Wachowskis"
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_.jpg",
      name: "Pulp Fiction",
      year: "1994",
      genre: "Crime",
      cast: "John Travolta, Uma Thurman, Samuel L. Jackson",
      director: "Quentin Tarantino"
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
      name: "Interstellar",
      year: "2014",
      genre: "Sci-Fi",
      cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
      director: "Christopher Nolan"
    },
    {
      image: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
      name: "Fight Club",
      year: "1999",
      genre: "Drama",
      cast: "Brad Pitt, Edward Norton, Helena Bonham Carter",
      director: "David Fincher"
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_.jpg",
      name: "Forrest Gump",
      year: "1994",
      genre: "Drama",
      cast: "Tom Hanks, Robin Wright, Gary Sinise",
      director: "Robert Zemeckis"
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg",
      name: "The Godfather",
      year: "1972",
      genre: "Crime",
      cast: "Marlon Brando, Al Pacino, James Caan",
      director: "Francis Ford Coppola"
    },
    {
      image: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_SY679_.jpg",
      name: "The Shawshank Redemption",
      year: "1994",
      genre: "Drama",
      cast: "Tim Robbins, Morgan Freeman, Bob Gunton",
      director: "Frank Darabont"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png",
      name: "Gladiator",
      year: "2000",
      genre: "Action",
      cast: "Russell Crowe, Joaquin Phoenix, Connie Nielsen",
      director: "Ridley Scott"
    },
    {
      image: "https://m.media-amazon.com/images/I/81+H4lZVw+L._AC_UF1000,1000_QL80_.jpg",
      name: "Schindler's List",
      year: "1993",
      genre: "Biography",
      cast: "Liam Neeson, Ben Kingsley, Ralph Fiennes",
      director: "Steven Spielberg"
    },
    {
      image: "https://m.media-amazon.com/images/I/51Qvs9i5a+L._AC_SY679_.jpg",
      name: "The Lord of the Rings",
      year: "2003",
      genre: "Fantasy",
      cast: "Elijah Wood, Viggo Mortensen, Ian McKellen",
      director: "Peter Jackson"
    },
    {
      image: "https://m.media-amazon.com/images/I/61OUGpUfAyL._AC_SY679_.jpg",
      name: "Avatar",
      year: "2009",
      genre: "Sci-Fi",
      cast: "Sam Worthington, Zoe Saldana, Sigourney Weaver",
      director: "James Cameron"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
      name: "The Avengers",
      year: "2012",
      genre: "Action",
      cast: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
      director: "Joss Whedon"
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg",
      name: "Jurassic Park",
      year: "1993",
      genre: "Adventure",
      cast: "Sam Neill, Laura Dern, Jeff Goldblum",
      director: "Steven Spielberg"
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_.jpg",
      name: "Titanic",
      year: "1997",
      genre: "Romance",
      cast: "Leonardo DiCaprio, Kate Winslet, Billy Zane",
      director: "James Cameron"
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BZGRiZDZhZjItM2M3ZC00Y2IyLTk3Y2MtMWY5YjliNDFkZTJlXkEyXkFqcGc@._V1_.jpg",
      name: "The Lion King",
      year: "1994",
      genre: "Animation",
      cast: "Matthew Broderick, Jeremy Irons, James Earl Jones",
      director: "Roger Allers, Rob Minkoff"
    },
    {
      image: "https://m.media-amazon.com/images/I/81aA7hEEykL._AC_SY679_.jpg",
      name: "Star Wars: A New Hope",
      year: "1977",
      genre: "Sci-Fi",
      cast: "Mark Hamill, Harrison Ford, Carrie Fisher",
      director: "George Lucas"
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BNGMxZDBhNGQtYTZlNi00N2UzLWI4NDEtNmUzNWM2NTdmZDA0XkEyXkFqcGc@._V1_.jpg",
      name: "Braveheart",
      year: "1995",
      genre: "Biography",
      cast: "Mel Gibson, Sophie Marceau, Patrick McGoohan",
      director: "Mel Gibson"
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_.jpg",
      name: "The Silence of the Lambs",
      year: "1991",
      genre: "Thriller",
      cast: "Jodie Foster, Anthony Hopkins, Scott Glenn",
      director: "Jonathan Demme"
    },
    {
        image: "https://images-cdn.ubuy.co.in/634e5d65dd958260504cb15c-the-wolf-of-wall-street.jpg",
        name: "The Wolf of Wall Street",
        year: "2013",
        genre: "Biography",
        cast: "Leonardo DiCaprio, Jonah Hill, Margot Robbie",
        director: "Martin Scorsese"
    },
    {
        image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10854488_p_v8_ac.jpg",
        name: "Mad Max: Fury Road",
        year: "2015",
        genre: "Action",
        cast: "Tom Hardy, Charlize Theron, Nicholas Hoult",
        director: "George Miller"
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BMjlkNTE5ZTUtNGEwNy00MGVhLThmZjMtZjU1NDE5Zjk1NDZkXkEyXkFqcGc@._V1_.jpg",
        name: "The Social Network",
        year: "2010",
        genre: "Biography",
        cast: "Jesse Eisenberg, Andrew Garfield, Justin Timberlake",
        director: "David Fincher"
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg",
        name: "Django Unchained",
        year: "2012",
        genre: "Western",
        cast: "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio",
        director: "Quentin Tarantino"
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_.jpg",
        name: "The Grand Budapest Hotel",
        year: "2014",
        genre: "Comedy",
        cast: "Ralph Fiennes, F. Murray Abraham, Mathieu Amalric",
        director: "Wes Anderson"
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BYTgwNmQzZDctMjNmOS00OTExLTkwM2UtNzJmOTJhODFjOTdlXkEyXkFqcGc@._V1_.jpg",
        name: "The Revenant",
        year: "2015",
        genre: "Adventure",
        cast: "Leonardo DiCaprio, Tom Hardy, Will Poulter",
        director: "Alejandro G. Iñárritu"
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
        name: "Black Panther",
        year: "2018",
        genre: "Action",
        cast: "Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o",
        director: "Ryan Coogler"
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg",
        name: "Parasite",
        year: "2019",
        genre: "Thriller",
        cast: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
        director: "Bong Joon Ho"
    },
    {
        image: "https://m.media-amazon.com/images/S/pv-target-images/18c61d69aca4685c7115e10140d317e4cd9d95e6f964d6e9e7e2f3705526f8a6.jpg",
        name: "Once Upon a Time in Hollywood",
        year: "2019",
        genre: "Comedy",
        cast: "Leonardo DiCaprio, Brad Pitt, Margot Robbie",
        director: "Quentin Tarantino"
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_.jpg",
        name: "Joker",
        year: "2019",
        genre: "Crime",
        cast: "Joaquin Phoenix, Robert De Niro, Zazie Beetz",
        director: "Todd Phillips"
    },
      
  ]

module.exports=sampleData;