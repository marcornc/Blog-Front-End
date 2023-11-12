import style from "./Comment.module.css";

function Comment({author, content }) {
  return (
    <>
      {" "}
      <h3 className={style.initialsName}>
        {author.split(" ")[0][0]}
        {author.split(" ")[1] ? author.split(" ")[1][0] : ""}
        {author.split(" ")[2] ? author.split(" ")[2][0] : ""}
      </h3>
      <p className={style.author}>{author}</p>
      <p className={style.content}>{content}</p>
    </>
  );
}

export default Comment;
