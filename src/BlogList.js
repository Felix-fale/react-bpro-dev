function BlogList({blogs, title}) {

  return (
    <div>
      <div className="bloglist">
        <h2 className="blogTitle">{title} </h2>
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

export default BlogList;
