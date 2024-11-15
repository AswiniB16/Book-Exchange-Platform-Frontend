import React, { useState } from 'react'
import './ManageBooks.css';
import AddBooks from './AddBooks';
import DeleteBooks from './DeleteBooks';
import EditBooks from './EditBooks';
import Navigation from '../Navigation/Navigation';
import { useBook } from './BookContext';


const ManageBooks = () => {
  const { clearSelectedBook } = useBook();
  const [showAddBookPage, setAddBookPage] = useState(false)
  const [showEditPage, setEditBookPage] = useState(false)
  const [activeItem, setActiveItem] = useState(null);

  const handleAddBooks = () => {
    clearSelectedBook();
    setAddBookPage(true);
    setEditBookPage(false);
    setActiveItem('add');
  }

  const handleEditBooks = () => {
    setAddBookPage(false);
    setEditBookPage(true);
    setActiveItem('edit');
  }


  return (
    <div class="layout">
      <div className="middle-area">
        {/* Middle area */}
        {showAddBookPage ? (
          <AddBooks />
        ) : showEditPage ? (
          <EditBooks />
        ) : <AddBooks />
        }
      </div>
      {/* <aside class="sidebar">Sidebar</aside> */}
      <div className="manageBooks-sidebar">
        <Navigation />
        <div class="sidebar">
          <div class="menu-item">
            <div class="menu-header">
              <span class="icon">☰</span>
              <span class="title">Manage</span>
              <span class="arrow">&#x25BC;</span>
            </div>
            <div class="submenu">
              <div className={`menu-item ${activeItem === 'add' ? 'active' : ''}`}>
                <span class="arrow">&#x25C6;</span><a onClick={handleAddBooks}>Add Books</a>
              </div>
              <div className={`menu-item ${activeItem === 'edit' ? 'active' : ''}`}>
                <span class="arrow">&#x25C6;</span><a onClick={handleEditBooks}>Edit Books</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ManageBooks
