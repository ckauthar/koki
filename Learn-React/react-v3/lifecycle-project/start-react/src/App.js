import React from 'react';
import { BrowserRouter, Route } from 'react-routeer-dom'
import logo from './logo.svg';
import './App.css';
import Posts from './Components/Posts/Posts';
import Images from './Components/Images/Images';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
        <Nav />
          <Route exact path='/' component={Home} />
          <Route path='/posts' component={Posts} />
          <Route path='/photos' component={Images} />
        </div>
      </BrowserRouter>
  );
}

export default App;
