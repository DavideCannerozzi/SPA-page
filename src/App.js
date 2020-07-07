import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path='/' component={ Home } />
        <Route path='/about' component={ About } />
        <Route path='/contact' component={ Contact } />
      </div>
    </BrowserRouter>
  );
}

export default App;
