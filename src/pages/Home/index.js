import { useEffect, useState } from "react";
import api from "../../services/api";
import './style.css'
import MovieDisplay from "../../components/MovieDisplay";
import MovieSkeleton from "../../components/MovieDisplay/MovieSkeleton/MovieSkeleton.js";


//https://api.themoviedb.org/3/movie/now_playing?api_key=67516dda184a61ee9e9dd721d6ea8b99&language=pt-BR


function Home() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadMovies() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "67516dda184a61ee9e9dd721d6ea8b99",
                    language: "pt-BR",
                    page: "1"
                }
            })

            setMovies(response.data.results.slice(0, 10))
            setLoading(false)
        }

        loadMovies();
    }, [])


    return (
        <div className="container">
            <div className="movie-list">
                {loading ? (
                    Array(10).fill().map((_, index) => (
                        <MovieSkeleton index={index} />
                    ))
                ) : (
                    movies.map((movie) => {
                        return (
                            <MovieDisplay
                                id={movie.id}
                                title={movie.title}
                                posterPath={movie.backdrop_path}
                            />
                        );
                    })
                )}
            </div>
        </div>
    );
}

export default Home;