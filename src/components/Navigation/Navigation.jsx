import React, { useState } from 'react'
import './Navigation.css';
import bookLogo from '../../assets/booklogo.jpg';
import Login from '../../components/Login/Login';
import { useUser } from '../../components/Login/UserContext';
import { useNavigate } from 'react-router-dom';


const Navigation = () => {
  const { user, setUser } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleManageBook = () => {
    navigate('/manage-books');
  };
  const handleLogout = () => {
    setUser({ userName: '', id: '' });
    navigate('/');

  };
  const handleOutsideClick = (event) => {
    if (event.target.classList.contains("modal")) {
      setShowModal(false);
    }
  };
  const handleShowModal = () => setShowModal(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={bookLogo} alt="Book Logo" />
      </div>
      <nav className="navbar">
        <a href="/">Home</a>
        {user.userName ? (
          <div
            className="user-dropdown"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <p>{user.userName}</p>
            {showDropdown && (
              <div className="dropdown-menu">
                <button onClick={handleLogout} className="dropdown-item">Logout</button>
                <button onClick={handleManageBook} className="dropdown-item">Manage-Books</button>
              </div>
            )}
          </div>
        ) : (
          <a onClick={handleLoginClick}>Login</a>
        )}
      </nav>

      {showModal && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <Login onClose={handleShowModal} />
          </div>
        </div>
      )}

    </header>
  )
}

export default Navigation
