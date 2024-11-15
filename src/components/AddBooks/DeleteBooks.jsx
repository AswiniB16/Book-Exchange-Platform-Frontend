import React, { useState, useEffect } from 'react'
import { useUser } from '../../components/Login/UserContext';
import './ManageBooks.css'
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';


const DeleteBooks = () => {
  const { user } = useUser();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const userId = user.id;
    axios.get("http://localhost:8080/bookexchangeplatform/books/" + userId)
      .then(response => {
        setBooks(response.data);

      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="product-grid">
      {books.map((book) => (
        <div key={book.id}
          className="product-card"
        >
          <h4>{book.bookTitle}</h4>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  )
}

export default DeleteBooks
