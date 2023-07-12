import './App.css';
import Home from './components/home';
import React from 'react';
import Navbar from './navbar';
import AllRecipes from './components/allrecipes'
import Community from './components/community';
import {Routes,Route,} from 'react-router-dom';


const App = () => {
 
  return (
      <div className="App">
        <Navbar/>
          <Routes>
                 <Route path='/' element={<Home/>}></Route>
                 <Route path='/Categories' element={< AllRecipes />}></Route>
                 <Route path='/Community' element={<Community/>}></Route>
          </Routes>
    </div>
)};

export default App;


