import React, { useState } from "react";
import './Search.css';
import '../Navigation/Navigation.css';
import bookLogo from '../../assets/booklogo.jpg';

const ProductGrid = ({ products }) => {
  const [showBookDetails, setShowBookDetails] = useState(null);

  const handleShowBookDetails = (product) => {
    setShowBookDetails(product);
  }

  const handleOutsideClick = (event) => {
    if (event.target.classList.contains("modal")) {
      setShowBookDetails(null);
    }
  };

  return (

    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={bookLogo} alt={product.name} onClick={() => handleShowBookDetails(product)} />
          <h4>{product.bookTitle}</h4>
          <p>{product.author}</p>
        </div>
      ))}
      {showBookDetails && (
        <div className="modal" onClick={handleOutsideClick} >
          <div className="modal-content">
            <div className="product-popup">
              <div className="book-box">
                <div className="book-content">
                  <div ><h4>Book Title:</h4><span>{showBookDetails.bookTitle}</span></div>
                  <div ><h4>Author:</h4><span>{showBookDetails.author}</span></div>
                  <div ><h4>Type:</h4><span>{showBookDetails.type}</span></div>
                  <div ><h4>Genre:</h4><span>{showBookDetails.bookTitle}</span></div>
                  <div ><h4>Location:</h4><span>{showBookDetails.location}</span></div>
                  <div ><h4>Status:</h4><span>{showBookDetails.status}</span></div>
                  <div ><h4>PublishedDate:</h4><span>{showBookDetails.publishedDate}</span></div>
                  <div ><h4>Language:</h4><span>{showBookDetails.language}</span></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      )}

    </div>



  );
};

export default ProductGrid;
