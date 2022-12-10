import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetail(props) {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div className="">
      {isLoading && <div>En coursde traitement ...</div>}
      {error && <div>{error} </div>}
      {blog && (
        <div className="blog">
          <h2 className="blog-titre">{blog.title} </h2>
          <small className="blog-publication-date">{`Publié le:${blog.date}`} </small>
          <p className="blog-body">{blog.body} </p>
          <p className="blog-author">{`Publié par: ${blog.author}`} </p>
        </div>
      )}
    </div>
  );
}

export default BlogDetail;
