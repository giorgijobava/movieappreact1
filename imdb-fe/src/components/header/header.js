// import React from "react"
// import "./Header.css"
// import { Link } from "react-router-dom"

// const Header = () => {
//     return (
//         <div className="header">
//             <div className="headerLeft">
//                 <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
//                 <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
//                 <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
//                 <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
//             </div>
//         </div>
//     )
// }

// export default Header

import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://cdn.dribbble.com/users/1805562/screenshots/6637153/logo.gif" /></Link>
                <Link to="/movies/comedy" style={{textDecoration: "none"}}><span>Comedy</span></Link>
                <Link to="/movies/drama" style={{textDecoration: "none"}}><span>Drama</span></Link>
                <Link to="/movies/horror" style={{textDecoration: "none"}}><span>Horror</span></Link>
                <Link to="/movies/action" style={{textDecoration: "none"}}><span>Action</span></Link>
                <Link to="/movies/scifi" style={{textDecoration: "none"}}><span>Sci-Fi</span></Link>
            </div>
        </div>
    );
};

export default Header;