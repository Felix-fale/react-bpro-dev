import { useState } from "react";
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

  return (
    <div className="home">
      <BlogList blogs={blogs} title={"Liste des blogs"}></BlogList>
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "tony")}
        title={"Liste des blogs de tony"}
      ></BlogList>
    </div>
  );
}

export default Home;
