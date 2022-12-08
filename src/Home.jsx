
function Home() {

    const handleCkick = () => {
        console.log("vous m'avez cliker");
    }
    const handleCkickAgain = (name, event) => {
        console.log(`vous m'avez cliker encore ${name}`, event);
    }

    return (
        <div className="home">
            <h2>Notre page d'accueil</h2>
            <button onClick={handleCkick}>Clicker moi!</button>
            <button onClick={ (e) => handleCkickAgain('fff', e.target)}>
                Clicker moi!
            </button>
        </div>
    );
}

export default Home;