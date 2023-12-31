import './App.css';
import Home from './components/home';
import React from 'react';
import Navbar from './navbar';
import AllRecipes from './components/allrecipes'
import { Routes, Route, } from 'react-router-dom';
import LoginPage from './auth/login';
import SignUpPage from './auth/signup';
import ProfilePage from './components/profile';
import SearchResults from './components/search_results_page';


const App = () => {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Categories' element={< AllRecipes />}></Route>
        <Route path='/SignUp' element={<SignUpPage />}></Route>
        <Route path='/Profile' element={<ProfilePage />}></Route>
        <Route path='/search_results' element={<SearchResults />}></Route>
        <Route path='/allrecipes' element={<AllRecipes />}></Route>
      </Routes>
    </div>
  )
};

export default App;


