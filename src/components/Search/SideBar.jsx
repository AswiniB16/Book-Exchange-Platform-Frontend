import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthorFilter from '../Sidebar/AuthorFilter';
import LanguageFilter from '../Sidebar/LanguageFilter';
import ProductGrid from '../Search/ProductGrid'
import './Search.css';
import TypeBubble from './TypeBubble';
import GenreFilter from '../Sidebar/GenreFilter';
import SearchBar from './SearchBar';
import AvailabilityStatusFilter from '../Sidebar/AvailabilityStatusFilter';

const Sidebar = ({ initialCategory }) => {
  const [products, setProducts] = useState([]);
  const [type, setSelectedType] = useState("");
  const [genre, setSelectedGenre] = useState(initialCategory);
  const [bookTitle, setTitleSearch] = useState("");
  const [author, setAuthorSearch] = useState("");
  const [language, setSelectedLanguage] = useState("");
  const [status,setAvailabilityStatus] = useState("");
  const [noResultsMessage, setNoResultsMessage] = useState("");

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };
  const handleTitleSearch = (title) => {
    console.log(title);
    setTitleSearch(title);
  }
  const handleAuthorSearch = (author) => {
    console.log(author);
    setAuthorSearch(author);
  }
  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  }

  const handleAvailabilityStatusSelect =(status) =>{
    setAvailabilityStatus(status);
  }

  useEffect(() => {
    setNoResultsMessage();
    const data = {
      ...(type && { type }),
      ...(genre && { genre }),
      ...(bookTitle && { bookTitle }),
      ...(author && { author }),
      ...(type && { type }),
      ...(language && { language }),
      ...(status && { status })
    };

    if (Object.keys(data).length > 0) {

      axios.post("http://localhost:8080/bookexchangeplatform/books/search", data)
        .then(response => {
          setProducts(response.data);
          if (response.data.length === 0) {
            setNoResultsMessage("Hmm... seems like a rare find! Try adjusting the filters to unlock more books.");

          }
        })

        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }
    else {
      axios.get("http://localhost:8080/bookexchangeplatform/all-books")
        .then(response => {
          setProducts(response.data);
          // setAuthorSearch();

        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }

  }, [bookTitle, type, genre, author, language, status]);
  return (
    <div className="search-layout">
      <div className="sidebar-filter">
        <h3 >BookTitle</h3>
        <SearchBar
          search={bookTitle}
          onSearchChange={handleTitleSearch} />

        <h3>Author</h3>
        <SearchBar
          search={author}
          onSearchChange={handleAuthorSearch}

        // placeholder="Search by author..."
        />
        <h3>Type</h3>
        <TypeBubble
          selectedType={type}
          onTypeSelect={handleTypeSelect} />
        <h3>Genre</h3>
        <GenreFilter
          selectedGenre={genre}
          onGenreSelect={handleGenreSelect} />
        <h3>Language</h3>
        <LanguageFilter
          selectedLanguage={language}
          onLanguageSelect={handleLanguageSelect} />
        <h3>AvailabilityStatus</h3>
        <AvailabilityStatusFilter
          selectedAvailabilityStatus={status}
          onAvailabilityStatusSelect={handleAvailabilityStatusSelect} />



      </div>

      <div className="grid">
        {noResultsMessage && (<div className="centered-message">
          <p>{noResultsMessage}</p>
        </div>)}
        <ProductGrid products={products} /></div>
    </div>
  );
};


export default Sidebar;
