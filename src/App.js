import './App.css';
import React from "react";
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { BookmarkProvider } from './component/BookmarkContext';
import {AuthContext, AuthProvider} from './component/AuthContext';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import Login from "./component/Login";
import Header from './component/Header';

function App() {
  const location = useLocation();

  // Hide the header only on the login page
  const isLoginPage = location.pathname === '/login' || location.pathname ==="/";
  return (
      <AuthProvider>
      {!isLoginPage && <Header />}
      <div>
          
        {/* Header with Navigation Links */}
        {/* <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul> */}

        {/* Define Routes */}
        <BookmarkProvider>
        <Routes>
          <Route path='/login' element= {<Login/>} />
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path='*' element= {<Login/>} />
          <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} /> 
          <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} /> 
        </Routes>
        </BookmarkProvider>
      </div>
      </AuthProvider>
  );
}
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = React.useContext(AuthContext);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default App;
