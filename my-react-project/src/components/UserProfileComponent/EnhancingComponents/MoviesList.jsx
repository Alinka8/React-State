import React, { useState } from "react";

const MoviesList = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      genre: "Action",
    },
    {
      title: "Titanic",
      description:
        "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
      genre: "Romance",
    },
    {
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      genre: "Action",
    },
    // Add more movies as needed
  ]);

  const [detailsVisible, setDetailsVisible] = useState({});
  const [viewAction, setViewAction] = useState(false);

  const toggleDetails = (index) => {
    setDetailsVisible((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const removeMovie = (indexToRemove) => {
    setMovies((prevMovies) =>
      prevMovies.filter((_, index) => index !== indexToRemove)
    );
  };

  const toggleView = () => {
    setViewAction(!viewAction);
  };

  const filteredMovies = viewAction
    ? movies.filter((movie) => movie.genre === "Action")
    : movies;

  return (
    <div>
      <button onClick={toggleView}>
        {viewAction ? "Show All Movies" : "Show Action Movies"}
      </button>
      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index}>
            <span onClick={() => toggleDetails(index)}>{movie.title}</span>
            {detailsVisible[index] && <p>{movie.description}</p>}
            <button onClick={() => removeMovie(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
