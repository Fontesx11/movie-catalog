import { useEffect, useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Favorites() {

    const [movies, setMovies] = useState([])

    useEffect(() => {

        const movieList = localStorage.getItem("@primeflix")
        setMovies(JSON.parse(movieList) || [])

    }, [])

    function handleMovieDelete(id){

     let newList = movies.filter((item)=>item.id !== id)

     setMovies(newList)
     localStorage.setItem("@primeflix", JSON.stringify(newList))
     toast.success("Filme deletado com sucesso!")
    }

    return (
        <div className='fav-movies'>
            <h1>Meus Filmes</h1>
            {movies.length === 0 && <span>Você não tem filmes ainda :( </span>}
            <ul>
                {movies.map((item) => {

                    return (
                        <li key={item.id}>
                            <span>{item.title}</span>

                            <div>
                                <Link to={`/movie/${item.id}`}>Ver Detalhes</Link>
                                <button onClick={()=>{
                                    handleMovieDelete(item.id)
                                }}>
                                    Excluir
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favorites;