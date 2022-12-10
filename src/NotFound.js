import { Link } from "react-router-dom";


function NotFound() {
    return (
        <div className="404">
            <h2>Oooops ....</h2>
            <p>Cette page n'existe pas</p>
            <Link to='/'>Allez à la page d'accueil...</Link>
        </div>
    );
}

export default NotFound;