import { useState, useEffect } from "react";
import BlogList from "./BlogList";

function Home() {
  const [blogs, setBlog] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setBlog(data);
          setIsLoading(false);
        });
    }, 2000);
  }, []);

  return (
    <div className="home">
      {isLoading && <div>En cours de traitement ...</div>}
      {blogs && <BlogList blogs={blogs} title={"Liste des blogs"}></BlogList>}
    </div>
  );
}

export default Home;
