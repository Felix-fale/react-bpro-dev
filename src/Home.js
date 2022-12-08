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
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title={'Liste des blogs'}></BlogList>
    </div>
  );
}

export default Home;
