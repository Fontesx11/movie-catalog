import { useState, useEffect } from 'react';
import api from '../../services/api';
import { useParams, useNavigate } from 'react-router-dom';
import './style.css'

function Movie() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        api.get(`/movie/${id}`, {
            params:{
                api_key: "67516dda184a61ee9e9dd721d6ea8b99",
                language: "pt-BR"
        }}).then((response)=>{
            console.log(response.data)
            setMovie(response.data)
            setLoading(false)
        }).catch(()=>{
            console.log("Error ao Encontrar a o filme")
            navigate('/')
        })

        return ()=>{
            console.log("componente foi desmontado")
        }
    },[id, navigate])

    if(loading){
        return(
            <div>
                <h1 style={{marginTop: "20px"}}>Carregando Filme....</h1>
            </div>
        )
    }

    return(
       <div className="movie-info">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title}/>

            <h3>Sinopse</h3>
            <span>{movie.overview}</span>

            <strong>Avaliação: {(movie.vote_average).toFixed(1)} / 10</strong>
            
            <div className='button-area'>
                <button>Salvar</button>
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