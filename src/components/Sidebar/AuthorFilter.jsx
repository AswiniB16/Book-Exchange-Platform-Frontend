import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Sidebar.css'

const AuthorFilter = ({ onAuthorSelect, selectedAuthor }) => {
  const [author, setAuthor] = useState([]);


  // Fetching data from the backend using Axios
  useEffect(() => {
    axios.get("http://localhost:8080/bookexchangeplatform/books?columnName=author")
      .then(response => {
        setAuthor(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);


  return (
    <div className="sidebar">
      <h3>Author</h3>
      <ul>
        {author.map((author, index) => (
          <li key={index}>
            <input
              type="radio"
              name="author"
              value={author}
              checked={selectedAuthor === author}
              onChange={() => onAuthorSelect(author)}
            />
            <label>{author}</label>
          </li>
        ))}
        <li>
          <input
            type="radio"
            name="author"
            value=""
            checked={selectedAuthor === ""}
            onChange={() => onAuthorSelect("")}
          />
          <label> All author</label>
        </li>
      </ul>
    </div>
  );
};

export default AuthorFilter;
