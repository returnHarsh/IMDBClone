import './card.css'
import React , {useState , useEffect} from 'react'
import Skeleton , { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom';

function Card({movie}) {

    const[isLoading , setIsLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        } , 1500)
    } , [])


  return (
    <div>
        {
            isLoading
             ?
             <div className='cards'>
                <SkeletonTheme color="#202020" highlightColor='="#444'>
                    <Skeleton height={300} duration={2}/>
                </SkeletonTheme>
             </div>
             :
             <Link  className='container' to={`movie/details/${movie.id}`} style={{textDecoration :  "none" , color: "white"}} >
                <div className='cards'>
                    <img className='cards_img' src={`https://image.tmdb.org/t/p/original${movie? movie.poster_path : ""}`} alt="" />

                </div>
             </Link>

        }
    </div>
  )
}

export default Card