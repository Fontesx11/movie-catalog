import { Link } from 'react-router-dom';
import './style.css'


function Error(){
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>A página que você procura não foi encontrada :c</h2>
            <Link to='./'>Volte para os Filmes!</Link>
        </div>
    )
}

export default Error;