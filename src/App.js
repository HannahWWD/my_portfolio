import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import './App.scss'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ResetScroll from './components/ResetScroll'
import Home from './pages/Home'
import About from './pages/About'
//import Contact from './pages/Contact'
import TravelApp from './pages/TravelApp'
import InterArtApp from './pages/InterArtApp';
import Galene from './pages/Galene';
import {Link} from 'react-router-dom';
import Weather from './pages/Weather';
import Pet from './pages/Pet';
import Blender3d from './pages/Blender3d';


function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <ResetScroll />
        <Navbar />
        <Link to="/" className="icon-main"><img src={require('../src/images/icon.svg')} alt="favicon"/></Link>
       
        <Route exact path="/" component={Home}/> 
        <Route path="/about"  component={About}/> 
        {/* <Route path="/contact"  component={Contact}/>  */}
        <Route path="/travel-app"  component={TravelApp}/> 
        <Route path="/interart"  component={InterArtApp}/> 
        <Route path="/galene"  component={Galene}/> 
        <Route path="/weather-widget"  component={Weather}/> 
        <Route path="/pet"  component={Pet}/> 
        <Route path="/blender3d"  component={Blender3d}/>
        
        
      
        <Footer />
      
        

      </BrowserRouter>

    </div>
  );
}

export default App;
