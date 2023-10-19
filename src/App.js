import './App.css';
import React , {useState , useEffect} from 'react';
import Header from './components/header/header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';



import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CardDetails from './components/cardDetails/cardDetails';



function App()
{
  return(

    

<div className='app'>

<Header/>

<Routes>
  <Route index element={<Home></Home>}>  </Route>
  <Route path='movie/:type' element={<MovieList></MovieList>}></Route>
  <Route path='movie/details/:id' element={<CardDetails></CardDetails>}></Route>
  <Route path='movie/:type/movie/details/:id' element={ <CardDetails></CardDetails>} ></Route>
  </Routes>  
</div> 




  );

}

export default App;
