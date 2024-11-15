import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Sidebar.css';

const LanguageFilter = ({ onLanguageSelect, selectedLanguage }) => {
  const [language, setLanguage] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/bookexchangeplatform/books?columnName=language")
      .then(response => {
        setLanguage(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);


  return (
    <div className="sidebar">
      <ul>
        {language.map((language, index) => (
          <li key={index}>
            <input
              type="radio"
              name="language"
              value={language}
              checked={selectedLanguage === language}
              onChange={() => onLanguageSelect(language)}
            />
            <label> {language}</label>
          </li>
        ))}
        <li>
          <input
            type="radio"
            name="language"
            value=""
            checked={selectedLanguage === ""}
            onChange={() => onLanguageSelect("")}
          />
          <label> All Language</label>
        </li>
      </ul>
    </div>
  );
};

export default LanguageFilter;
