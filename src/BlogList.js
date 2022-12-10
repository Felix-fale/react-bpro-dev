import { Link } from "react-router-dom";

function BlogList({ blogs, title }) {
  return (
    <div>
      <div className="bloglist">
        <h2 className="blogTitle">{title} </h2>
        {blogs.map((blog) => (
          <div className="blog" key={blog.id}>
            <Link to={`/blogs/${blog.id}`} className="blog-titre">
              {blog.title}
            </Link>
            <small className="bmog-publication-date">
              Publié le {blog.date}
            </small>
            <p className="blog-author">Publié par: {blog.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
