import React from 'react';
import './Search.css';
import SideBar from "./SideBar";
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Search = () => {
  const location = useLocation();
  const category = location.state?.category || '';

  return (
    <div className="app-container">
      <SideBar initialCategory={category} />
      <Navigation />
    </div>
  );
};

export default Search;
