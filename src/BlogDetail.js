import { useParams } from "react-router-dom";

function BlogDetail(props) {
  const {id} = useParams();
  
  return (
    <div className="detail-blog">
      <h2>Page de detail de blog {id} </h2>
    </div>
  );
}

export default BlogDetail;
