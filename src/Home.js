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
        {blogs.map((blog) => (
          <div className="blog" key={blog.id}>
            <a href="/" className="blog-titre">
              {blog.title}
            </a>
            <small className="bmog-publication-date">{blog.author}</small>
            <p className="blog-author">{blog.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
