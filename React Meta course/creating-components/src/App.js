import './App.css';
import Heading from './Head/Heading.js';
import React from 'react';
import Contact from './Contact/Contacs';
import { Routes, Route, Link } from "react-router-dom";
import BirdSounds from './Birds/BirdSounds';
import FruitsPage from './Fruits/FruitsPage';
import logo from './assets/logo.svg';
import image2 from './assets/swap-photo.jpeg';

function App() {


  const [fruits] = React.useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'apple', id: 2},
    {fruitName: 'plum', id: 3},
    {fruitName: 'strawberry', id: 4},
  ]);

  return (
    <div className="App">
      <nav>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
        <Link to="/birdsounds" className="nav-item">Bird Sounds</Link>
        <Link to="/fruits" className='nav-item'>Fruits</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Heading firstName="Adam" logo={logo} image2={image2}/>}></Route>
        <Route path="/contact" element={<Contact/> }></Route>
        <Route path="/birdsounds" element={<BirdSounds/>}></Route>
        <Route path="/fruits" element={<FruitsPage fruits={fruits}/>}></Route>
      </Routes>
    </div>

  )

}

export default App;
