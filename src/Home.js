import { useState, useEffect } from "react";
import BlogList from "./BlogList";

function Home() {
  const [blogs, setBlog] = useState([
    {
      id: 1,
      title: "Lorem, ipsum dolor.",
      body: "Lorem ipsum dolor sit amet consectetur",
      author: "Fale",
      date: "08/12/2022",
    },
    {
      id: 2,
      title: "Lorem, ipsum dolor.",
      body: "Lorem ipsum dolor sit amet consectetur",
      author: "tony",
      date: "08/12/2022",
    },
    {
      id: 3,
      title: "Lorem, troisieme.",
      body: "Lorem ipsum dolor sit amet consectetur",
      author: "tony",
      date: "08/12/2022",
    },
  ]);

  const [name, setName] = useState("fale");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlog(newBlogs);
  };

  useEffect(() => {
    console.log("useEffect");
    console.log(blogs);
  }, [name]);

  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        title={"Liste des blogs"}
        handleDelete={handleDelete}
      ></BlogList>
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "tony")}
        title={"Liste des blogs de tony"}
      ></BlogList> */}
      <button onClick={ () => setName('tony')}>Changer le nom</button>
      <p>{name} </p>
    </div>
  );
}

export default Home;
