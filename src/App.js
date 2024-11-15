// import './App.css';
import Navigation from './components/Navigation/Navigation';
import Cards from './components/Cards/Cards';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import ManageBooks from './components/AddBooks/ManageBooks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './components/Login/UserContext';
import { BookProvider } from './components/AddBooks/BookContext';
import ScrollToTop from './components/ScrollToTop';
import ForgotPassword from './components/Login/ForgotPassword';

const App = () => {

  return (
    <Router>
      <UserProvider>
        <ScrollToTop />
        <BookProvider>

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/search" element={<Search />} />
            <Route path="/manage-books" element={<ManageBooks />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>

        </BookProvider>
      </UserProvider>
    </Router>
  );
};

const Dashboard = () => {

  return (
    <div>
      <Home />
      <Navigation />
      <Cards />
    </div>
  );
};

export default App;
