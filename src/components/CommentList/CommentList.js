import Comment from "../Comment/Comment";
import style from "./CommentList.module.css";

function CommentList({ comments }) {
  console.log(comments);
  return (
    <ul className={style.commentsContainer}>
      {comments.map((comment) => (
        <li key={comment.id} className={style.comment}>
          <Comment
            author={comment.author}
            content={comment.content}
          />
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
