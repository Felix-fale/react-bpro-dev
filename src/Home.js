import { useState } from "react";

function Home() {
  // let name = "fale";
  const [name, setName] = useState("fale");
  const [age, setAge] = useState(26);

  const handleCkick = () => {
    setName("tony");
    setAge(30);
    console.log(name);
  };

  return (
    <div className="home">
      <h2>Notre page d'accueil</h2>
      <p>{name} a {age} ans </p>
      <button onClick={handleCkick}>Clicker!</button>
    </div>
  );
}

export default Home;
