import React, { useState, useEffect } from 'react'
import { useUser } from '../../components/Login/UserContext';
import axios from 'axios';
import './ManageBooks.css'
import { useBook } from './BookContext';
import AddBooks from './AddBooks';

const EditBooks = () => {
  const { user } = useUser();
  const [books, setBooks] = useState([]);
  const userId = user.id;
  const [isEdit, setIsEdit] = useState(false)
  const { setSelectedBook } = useBook();

  useEffect(() => {

    axios.get("http://localhost:8080/bookexchangeplatform/books/" + userId)
      .then(response => {
        setBooks(response.data);

      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const handleEdit = (book) => {
    console.log(book)
    
    setIsEdit(true);
    setSelectedBook(book);
  };



  const handleDelete = (id) => {
    axios.delete("http://localhost:8080/bookexchangeplatform/books/" + id)
    alert("Book deleted successfully.");
    axios.get("http://localhost:8080/bookexchangeplatform/books/" + userId)
      .then(response => {
        setBooks(response.data);

      })
  };

  return (
    <div class="edit-form">
      {isEdit ? (
        <AddBooks />
      ) :
      <div class="table-container">
        {
          books.length > 0 ? (
            <table className="books-table">
              <thead>
                <tr>
                  <th>Book Title</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr key={book.id}>
                    <td>{book.bookTitle}</td>
                    <td>
                      <i
                        className="fas fa-edit edit-icon"
                        style={{ cursor: 'pointer', color: 'blue' }}
                        onClick={() => handleEdit(book)}
                      ></i>
                    </td>
                    <td>
                      <i
                        className="fas fa-trash delete-icon"
                        style={{ cursor: 'pointer', color: 'red' }}
                        onClick={() => handleDelete(book.id)}
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="no-books-message">
              <p>No Books Found</p>
              <p>It appears you haven’t added any books to your collection yet. Get started by adding a new book—share your favorites or explore more options to build your library!</p>
            </div>
          )
        }
      
    </div>
}
    </div>
  );
};

export default EditBooks
