
function NavBar(props) {
    return (
        <nav className='navbar'>
            <div>
                <a className="logo" href="/">LE BLOG</a>
            </div>
            <ul className='liens'>
                <li>
                    <a href="/" className='lien'>Accueil</a>
                </li>
                <li>
                    <a href="/" className='lien buttonArticle'>Creer un article</a>
                </li>
                 
            </ul>
        </nav>
    );
}

export default NavBar;