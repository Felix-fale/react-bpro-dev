import { useState, useEffect } from "react";
import BlogList from "./BlogList";

function Home() {
  const [blogs, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((response) => {
          console.log(response);
          if (!response.ok) {
            throw Error("Desolé une erreur est survenu ...");
          }
          return response.json();
        })
        .then((data) => {
          setBlog(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          console.log(err.message);
          setError(err.message);
          setIsLoading(false);
        });
    }, 2000);
  }, []);

  return (
    <div className="home">
      {error && <div style={{'color': 'red'}}>{error} </div> }
      {isLoading && <div>En cours de traitement ...</div>}
      {blogs && <BlogList blogs={blogs} title={"Liste des blogs"}></BlogList>}
    </div>
  );
}

export default Home;
