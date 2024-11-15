import React, { createContext, useContext, useState } from 'react';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const clearSelectedBook = () => {
    setSelectedBook(null);
  };

  return (
    <BookContext.Provider value={{ selectedBook, setSelectedBook, clearSelectedBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBook = () => useContext(BookContext);
