import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useUser } from '../../components/Login/UserContext';
import './ManageBooks.css';
import { useBook } from './BookContext';

const AddBooks = () => {
    useEffect(() => {
        const menuHeaders = document.querySelectorAll('.menu-header');
        menuHeaders.forEach(header => {
          header.addEventListener('click', function () {
            this.classList.toggle('active');
            const submenu = this.nextElementSibling;
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
          });
        });
        return () => {
          menuHeaders.forEach(header => {
            header.removeEventListener('click', function () { });
          });
        };
      }, []);
    
      const { user } = useUser();
      const { selectedBook } = useBook();
      const bookGenre = ["Fiction", "Science", "History", "Romance", "Mystery", "Horror", "Fantasy", "Poetry", "Others"];
      const bookLanguage = ["English", "Hindi", "Spanish", "Chinese", "French", "Others"];
      const bookStatus = ["Available", "Sold"];
      const bookType = ["Exchange", "Lend"]
      const initialBookData = {
        id: '',
        userId: user.id || '',
        bookTitle: '',
        author: '',
        genre: '',
        location: '',
        status: '',
        language: '',
        description: '',
        type: ''
      };
      
      const [bookData, setBookData] = useState(initialBookData);
    
      useEffect(() => {
        if (selectedBook) {
          setBookData({
            id: selectedBook.id|| '',
            userId: user.id|| '',
            bookTitle: selectedBook.bookTitle || '',
            author: selectedBook.author || '',
            genre: selectedBook.genre || '',
            location: selectedBook.location || '',
            status: selectedBook.status || '',
            language: selectedBook.language || '',
            description: selectedBook.description || '',
            type:selectedBook.type || ''
          });
        } else {
          setBookData({
            userId: user.id,
            bookTitle: '',
            author: '',
            genre: '',
            location: '',
            status: '',
            language: '',
            description: '',
            type:''
          });
        }
      }, [selectedBook]);
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const dataToPost = [bookData];
          if (selectedBook) {
            // Update existing book
            await axios.patch('http://localhost:8080/bookexchangeplatform/books', dataToPost);
            alert('Book updated successfully');
          } else {
         
            await axios.post('http://localhost:8080/bookexchangeplatform/books', dataToPost);
            alert('Book added successfully');
           
          }
          setBookData(initialBookData);
        } catch (error) {
          console.error('Error adding/updating book:', error);
          alert('Something went wrong. Please try again.');
        }
      };

  return (
    <div class="content">
        <div className="content-layout">
          <div className="addBook-form">
            <form onSubmit={handleSubmit}>
              {/* Book Title/Name */}
              <div className='bookInfo-form'>
                <label>Book Title/Name</label>
                <input type="text" value={bookData.bookTitle} className="bookdata"
               onChange={(e) => setBookData({ ...bookData, bookTitle: e.target.value })}
               required />
              </div>
              {/* Description */}
              
              <div className='bookInfo-form'>
                <label>Description</label>
                <input type="text" value={bookData.description} className="bookdata"
                  onChange={(e) => setBookData({ ...bookData, description: e.target.value })} />
              </div>
              {/* Location */}
              <div className='bookInfo-form'>
                <label>Location</label>
                <input type="text" value={bookData.location} className="bookdata" 
                 onChange={(e) => setBookData({ ...bookData, location: e.target.value })} />
              </div>
              <div className='bookInfo-form'>
                <label>Author</label>
                <input type="text"value={bookData.author}  className="bookdata"
                 onChange={(e) => setBookData({ ...bookData, author: e.target.value })} required />
              </div>
              {/* drop down */}
              {/* Genre */}
              <div class="form-row">
                <div class="dropdown-form">
                  <label for="genre">Genre</label>
                  <select id="genre" value={bookData.genre} name="genre" class="styled-dropdown"
                    onChange={(e) => setBookData({ ...bookData, genre: e.target.value })}>
                    <option value="" disabled selected>Select</option>
                    {bookGenre.map((genre, index) => (
                      <option key={index} value={genre} >
                        {genre}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Availability Status */}
                <div class="dropdown-form">
                  <label for="status">Availability Status</label>
                  <select id="status" name="genre" value={bookData.status} class="styled-dropdown" 
                   onChange={(e) => setBookData({ ...bookData, status: e.target.value })}>
                    <option value="" disabled selected>Select</option>
                    {bookStatus.map((status, index) => (
                      <option key={index} value={status} >
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Language */}
                <div class="dropdown-form">
                  <label for="language">Language</label>
                  <select id="language" name="language" value={bookData.language} class="styled-dropdown" 
                  onChange={(e) => setBookData({ ...bookData, language: e.target.value })}>
                    <option value="" disabled selected>Select</option>
                    {bookLanguage.map((language, index) => (
                      <option key={index} value={language} >
                        {language}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Type */}
                <div class="dropdown-form">
                  <label for="type">Type</label>
                  <select id="type" name="type" value={bookData.type} class="styled-dropdown" 
                  onChange={(e) => setBookData({ ...bookData, type: e.target.value })}>
                    <option value="" disabled selected>Select</option>
                    {bookType.map((type, index) => (
                      <option key={index} value={type} >
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="submitcancel">
                <button type="submit">Submit</button>
                <button type="Cancel">Cancel</button>
              </div>

            </form>
          </div>
        </div>
      </div>
  )
}

export default AddBooks
