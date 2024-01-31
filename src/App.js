import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import News from './news';
import './css/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/news" element={<News />} />
          
          {/* Добавьте другие маршруты для оставшихся страниц здесь */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
