import React, { useEffect, useState } from "react";
import './Sidebar.css';

const AvailabilityStatusFilter = ({ onAvailabilityStatusSelect, selectedAvailabilityStatus }) => {
  const availabilityStatus = ["Available", "Sold"];


  return (
    <div className="sidebar">
      <ul>
        {availabilityStatus.map((availabilityStatus, index) => (
          <li key={index}>
            <input
              type="radio"
              name="availabilityStatus"
              value={availabilityStatus}
              checked={selectedAvailabilityStatus === availabilityStatus}
              onChange={() => onAvailabilityStatusSelect(availabilityStatus)}
            />
            <label> {availabilityStatus}</label>
          </li>
        ))}
        <li>
          <input
            type="radio"
            name="availabilityStatus"
            value=""
            checked={selectedAvailabilityStatus === ""}
            onChange={() => onAvailabilityStatusSelect("")}
          />
          <label> All Availability Status</label>
        </li>
      </ul>
    </div>
  );
};

export default AvailabilityStatusFilter;
