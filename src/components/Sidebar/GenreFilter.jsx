import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Sidebar.css';

const GenreFilter = ({ onGenreSelect, selectedGenre }) => {
  const [genre, setGenre] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8080/bookexchangeplatform/books?columnName=genre")
      .then(response => {
        setGenre(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);


  return (
    <div className="sidebar">

      <ul>
        {genre.map((genre, index) => (
          <li key={index}>
            <input

              type="radio"
              name="Genre"
              value={genre}
              checked={selectedGenre === genre}
              onChange={() => onGenreSelect(genre)}
            />
            <label> {genre}</label>
          </li>
        ))}
        <li>
          <input
            type="radio"
            name="Genre"
            value=""
            checked={selectedGenre === ""}
            onChange={() => onGenreSelect("")}
          />
          <label> All Genre</label>
        </li>
      </ul>
    </div>
  );
};

export default GenreFilter;
