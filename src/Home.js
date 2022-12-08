import { useState } from "react";

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
      <div className="bloglist">
        <div className="blog">
          <a href="" className="blog-titre">
            Le titre
          </a>
          <small className="bmog-publication-date">Publier le ...</small>
          <p className="blog-author">Publier par: ...</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
