import React from 'react';
// import './App.css';
import './App.scss'
import Home from './pages/home'
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Route exact path="/" component={Home} /> 

    </BrowserRouter>

    </div>
  );
}

export default App;
