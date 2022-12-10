import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <nav className="navbar">
      <div>
        <Link className="logo" to="/">
          LE BLOG
        </Link>
      </div>
      <ul className="liens">
        <li>
          <Link to="/" className="lien">
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/create" className="lien buttonArticle">
            Creer un article
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
