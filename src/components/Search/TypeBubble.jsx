import React from 'react';
import '../Sidebar/Sidebar.css';

const TypeBubble = ({ onTypeSelect, selectedType }) => {
  const type = ["Exchange", "Lend"];

  return (

    <div className="sidebar">   
      <ul>
        {type.map((type, index) => (
          <li key={index}>
            <input
              type="radio"
              name="type"
              value={type}
              checked={selectedType === type}
              onChange={() => onTypeSelect(type)}
            />
            <label>{type}</label>
          </li>
        ))}
        <li>
          <input
            type="radio"
            name="type"
            value=""
            checked={selectedType === ""}
            onChange={() => onTypeSelect("")}
          />
          <label> All type</label>
        </li>
      </ul>
    </div>
  );
};

export default TypeBubble
