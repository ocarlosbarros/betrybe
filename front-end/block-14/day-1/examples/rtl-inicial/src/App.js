import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import './App.css';

class App extends Component {
  render(){
    return (
      <main>
        <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
        </Routes>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
