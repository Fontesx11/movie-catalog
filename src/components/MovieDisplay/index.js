import { Link } from "react-router-dom";
import './style.css'

function MovieDisplay({ id, title, posterPath }) {

    return (
        <div className="movie-display">
            <article key={id}>
            <strong>{title}</strong>
            <img src={`https://image.tmdb.org/t/p/original/${posterPath}`} alt={title} />
            <Link to={`/movie/${id}`}>Acesse</Link>
        </article>
        </div>
        
    )
}

export default MovieDisplay;