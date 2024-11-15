import React, { useState } from 'react'
import '../Sidebar/Sidebar.css';

const SearchBar = ({ onSearchChange, search }) => {

    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log(inputValue);
            event.preventDefault();
            onSearchChange(inputValue);
        }
    };

    return (
        <div className="searchbar">
            <input
                type="text"
                placeholder="Search..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}

export default SearchBar
