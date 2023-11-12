import style from "./BlogPost.module.css";

function BlogPost({ blog }) {
  return (
    <section className={style.post}>
      <h1 className={style.title}>{blog.title}</h1>
      <h3 className={style.author}>by {blog.author}</h3>
      <h5 className={style.datePosted}>{blog.datePosted}</h5>
      <div className={style.space}></div>
      <img src={blog.imageSrc} alt={blog.imageAlt} className={style.image}/>
      <h6 className={style.imageAlt}>{blog.imageAlt}</h6>
      <p className={style.content}>{blog.content}</p>
    </section>
  );
}

export default BlogPost;
