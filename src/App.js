import './App.css';
import Home from './components/home';
import React from 'react';
import Navbar from './navbar';
import AllRecipes from './components/allrecipes'
import Community from './components/community';
import {Routes,Route,} from 'react-router-dom';
import LoginPage from './auth/login';
import SignUpPage from './auth/signup';
import ProfilePage from './components/profile';
import SearchResults from './components/search_results_page';


const App = () => {
 
  return (
      <div className="App">
        <Navbar/>
          <Routes>
                 <Route path='/' element={<Home/>}></Route>
                 <Route path='/Categories' element={< AllRecipes />}></Route>
                 <Route path='/Community' element={<Community/>}></Route>
                 <Route path='/Login' element={<LoginPage/>}></Route>
                 <Route path='/SignUp' element={<SignUpPage/>}></Route>
                 <Route path='/Profile' element={<ProfilePage/>}></Route>
                 <Route path='/search_results' element={<SearchResults/>}></Route>

          </Routes>
    </div>
)};

export default App;


