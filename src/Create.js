import { useState } from "react";

function Create(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const handleBlogAdding = (e) => {
    e.preventDefault();
  };
  return (
    <div className="create-blog">
      <form onSubmit={handleBlogAdding} className="form">
        <div className="form-group">
          <label htmlFor="title">Titre de l'article</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Selectionez un auteur</label>
          <select
            required
            className="form-control"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value=""></option>
            <option value="Fale">Duplex</option>
            <option value="Tony">Tony</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="body">Contenu de l'article</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="form-control textarea"
            id="body"
            rows="10"
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="btn-create">
            Creer Article
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
