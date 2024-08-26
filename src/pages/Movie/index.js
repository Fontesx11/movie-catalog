import { useState, useEffect } from 'react';
import api from '../../services/api';
import { useParams, useNavigate } from 'react-router-dom';
import SkeletonPlaceHolder from './Skeleton';
import { toast } from 'react-toastify';
import './style.css'


function Movie() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        api.get(`/movie/${id}`, {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                language: "pt-BR"
            }
        }).then((response) => {
            setMovie(response.data)
            setLoading(false)

        }).catch(() => {
            navigate('/', { replace: true })
        })

    }, [id, navigate])

    function handleSaveMovie() {
        
        const myList = localStorage.getItem("@maxflix:mylist")

        let savedMovies = JSON.parse(myList) || [];

        const hasMovie = savedMovies.some((m) => { return m.id === movie.id})

        if (hasMovie) {
            toast.warn("Esse filme já está na sua lista!")
            return
        }

        savedMovies.push(movie)

        localStorage.setItem("@maxflix:mylist", JSON.stringify(savedMovies))
        toast.success("Filme salvo com sucesso!")

    }

    if (loading) {
        return (
            <div>
                <SkeletonPlaceHolder />
            </div>
        )
    }

    return (
        <div className="movie-info">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />

            <h3>Sinopse</h3>
            <span>{movie.overview}</span>

            <strong>Avaliação: {(movie.vote_average).toFixed(1)} / 10</strong>

            <div className='button-area'>
                <button onClick={handleSaveMovie}>Salvar</button>
                <button>
                    <a href={`https://youtube.com/results?search_query=${movie.title} Trailer`} target='_blank' rel="external noreferrer">
                        Trailer
                    </a>
                </button>
            </div>

        </div>
    )
}

export default Movie;