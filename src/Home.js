import { useState, useEffect } from "react";
import BlogList from "./BlogList";

function Home() {
  const [blogs, setBlog] = useState(null);

  const [name, setName] = useState("fale");

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setBlog(data);
      });
  }, []);

  return (
    <div className="home">
      {blogs && (
        <BlogList
          blogs={blogs}
          title={"Liste des blogs"}
        ></BlogList>
      )}
    </div>
  );
}

export default Home;
