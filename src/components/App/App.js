import BlogPost from "../BlogPost/BlogPost";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";

import { useState } from "react";

import { blog } from "../../data/blogs";
import { comments } from "../../data/comments";

function App() {
  //state initialization
  const [commentDataList, setCommentDataList] = useState(comments);

  const addComment = (commentNoId) => {
    const newComment = {
      id: window.crypto.randomUUID(),
      ...commentNoId,
    };

    setCommentDataList((prevComments) => [...prevComments, newComment]);
  };

  return (
    <>
      <BlogPost blog={blog} />
      <CommentList comments={commentDataList} />
      <CommentForm addComment={addComment} />
    </>
  );
}

export default App;
