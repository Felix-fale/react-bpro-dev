import "./App.css";

function App() {
  const titre = "salut a tous";
  const contenu = "ici le contenu de notre article";
  const likes = 150;
  return (
    <div className="App">
      <div className="contenu">
        <h2>{titre} </h2>
        <p>{contenu} </p>
        <p>{likes} personnes ont aimé </p>
      </div>
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=Ny3iznrppnU&t=946s Lien du cours
// 33m00s 