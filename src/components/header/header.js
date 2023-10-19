import './header.css'
import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className='header'>

<Link to="/"><img className='header_icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/863px-IMDB_Logo_2016.svg.png?20200406194337" /></Link>
<Link  to="/movie/popular" style={{textDecoration: "none"}}> <span> Popular </span></Link>
<Link  to="/movie/top_rated" style={{textDecoration: "none"}}> <span> Top Rated </span></Link>
<Link  to="/movie/upcoming" style={{textDecoration: "none"}}> <span> Upcoming </span></Link>


    </div>
  )
}

export default Header