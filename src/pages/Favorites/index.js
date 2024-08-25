import { useEffect, useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom';

function Favorites() {

    const [movies, setMovies] = useState([])

    useEffect(() => {

        const movieList = localStorage.getItem("@primeflix")
        console.log(movieList)
        setMovies(JSON.parse(movieList) || [])

    }, [])

    return (
        <div className='fav-movies'>
            <h1>Meus Filmes</h1>
            <ul>
                {movies.map((item) => {

                    return (
                        <li key={item.id}>
                            <span>{item.title}</span>

                            <div>
                                <Link to={`/movie/${item.id}`}>Ver Detalhes</Link>
                                <button>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favorites;