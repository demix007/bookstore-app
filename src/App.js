import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import BookList from './components/BookList';

function App() {
  return (
    <BrowserRouter>
      <div className="main-app">
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
