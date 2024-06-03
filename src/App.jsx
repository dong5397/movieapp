import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home.jsx';
import MovieList from './page/MovieList.jsx';
import MovieDetail from './page/MovieDetail.jsx';
import Header from './components/Header.jsx';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<MovieList />} />
        <Route path="/Movie:/id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
