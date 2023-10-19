import './movieList.css'
import React , {useState , useEffect} from 'react'
import {useParams} from "react-router-dom"
import { getDefaultNormalizer } from '@testing-library/react';
import Card from '../card/card';

function MovieList() {

    const[movieList , setMovieList] = useState([]);
  const {type} = useParams();

    useEffect(()=>{
        getData();
    },[])

    useEffect(()=>{
        getData();
    },[type])

    const getData = () =>{
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => {
            setMovieList(data.results)
        })
    }

  return (
    <div className='movieList'>
        <h2 className='list_title'>{(type ? type : "popular").toUpperCase()}</h2>

        <div className='list_cards'>
            {
                movieList.map(movie=>(
                    <Card movie = {movie}/>
                ))
            }
        </div>

    </div>
  )

}

export default MovieList