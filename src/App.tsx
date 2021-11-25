import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Countries from './pages/Countries';
import Country from './pages/Country';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

const App = () => (
  <div className="App">
    <header className="header">
      <nav className="header__nav">
        <Link className="link link-header" to="/">Home</Link>
        &nbsp; &nbsp;
        <Link className="link link-header" to="/countries">Countries</Link>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/countries" element={<Countries />} />
      <Route path="/country/:id" element={<Country />} />
      <Route path="/404" element={<PageNotFound />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </div>
);

export default App;
