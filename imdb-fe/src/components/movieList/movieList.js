// import React, {useEffect, useState} from "react"
// import Cards from "../card/card"
// import "./movieList.css"
// import { useParams } from "react-router-dom"


// const MovieList = () => {
    
//     const [movieList, setMovieList] = useState([])
//     const {type} = useParams()

//     useEffect(() => {
//         getData()
//     }, [])

//     useEffect(() => {
//         getData()
//     }, [type])

//     const getData = () => {
//         fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
//         .then(res => res.json())
//         .then(data => setMovieList(data.results))
//     }

//     return (
//         <div className="movie__list">
//             <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
//             <div className="list__cards">
//                 {
//                     movieList.map(movie => (
//                         <Cards movie={movie} />
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

// export default MovieList




// import React, { useEffect, useState } from "react";
// import Cards from "../card/card";
// import "./movieList.css";
// import { useParams } from "react-router-dom";

// const MovieList = () => {
//     const [movieList, setMovieList] = useState([]);
//     const { type } = useParams();

//     useEffect(() => {
//         getData();
//     }, []);

//     useEffect(() => {
//         getData();
//     }, [type]);

//     const getData = () => {
//         fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
//             .then((res) => res.json())
//             .then((data) => setMovieList(data.results));
//     };

//     return (
//         <div className="movie__list">
//             <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
//             <div className="list__cards">
//                 {movieList.map((movie) => (
//                     <Cards key={movie.id} movie={movie} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default MovieList;



















import React, { useEffect, useState } from "react";
import Cards from "../card/card";
import "./movieList.css";
import { useParams } from "react-router-dom";

const genreMap = {
    comedy: 35,
    drama: 18,
    horror: 27,
    action: 28,
    scifi: 878
};

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const { type } = useParams();

    useEffect(() => {
        getData();
    }, [type]);

    const getData = () => {
        const genreId = genreMap[type] || 35;
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&with_genres=${genreId}`)
            .then((res) => res.json())
            .then((data) => setMovieList(data.results.slice(0, 20)));
    };

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "Comedy").toUpperCase()}</h2>
            <div className="list__cards">
                {movieList.map((movie) => (
                    <Cards key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;