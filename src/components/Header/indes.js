import { Link } from "react-router-dom";
import './style.css'

function Header() {
    
    return(
        <header>
           <Link className="logo" to={'/'}>Max Flix</Link>
           <Link className="favorites" to={'/favorites'}>Meus Filmes</Link>
        </header>
    )
}

export default Header;