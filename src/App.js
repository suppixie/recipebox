import './App.css';
import Home from './components/home';
import React from 'react';
import Navbar from './navbar';
import AllRecipes from './components/allrecipes'
import Community from './components/community';
import {Routes,Route,} from 'react-router-dom';
import RecipePage from './components/recipepage';
import LoginPage from './auth/login';
import SignUpPage from './auth/signup';


const App = () => {
 
  return (
      <div className="App">
        <Navbar/>
          <Routes>
                 <Route path='/' element={<Home/>}></Route>
                 <Route path='/Categories' element={< AllRecipes />}></Route>
                 <Route path='/Community' element={<Community/>}></Route>
                 <Route path='/recipe/:label' element={<RecipePage/>}></Route>
                 <Route path='/Login' element={<LoginPage/>}></Route>
                 <Route path='/SignUp' element={<SignUpPage/>}></Route>
          </Routes>
    </div>
)};

export default App;


