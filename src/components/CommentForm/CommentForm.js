import style from "./CommentForm.module.css";
import { useState } from "react";

function CommentForm({ addComment }) {

  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author) setAuthor("Anon Author");
     console.log(author);
     console.log(content);
    
    addComment({ author, content});

    setAuthor("");
    setContent("");
  }

  return (
    <form className={style.container} onSubmit={handleSubmit}>
      <label htmlFor="author" className={style.label}>
        Author:
      </label>
      <input
        type="text"
        id="author"
        name="author"
        value={author}
        className={style.input}
        onChange={
          (e)=>{
            setAuthor(e.target.value ? e.target.value : "Anon Author");
        }}
      />

      <label htmlFor="content" className={style.label}>
        Comment:
      </label>
      <textarea
        type="text"
        id="content"
        name="content"
        required
        value={content}
        className={style.input}
        onChange={(e)=>setContent(e.target.value)}
      />

      <button type="submit" className={style.button}>
        Submit
      </button>
    </form>
  );
}

export default CommentForm;
