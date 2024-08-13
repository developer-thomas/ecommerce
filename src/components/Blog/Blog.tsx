import "./Blog.css";
import { blogPosts } from "../../data/blog";
import BlogItem from "../BlogItem/BlogItem";
import defaultImg from "../../assets/default-image.jpg";
const Blog = () => {
  return (
    <div className="blog">
      <h3>Latest News</h3>
      <h1>Watches New Trends</h1>
      <div className="blog-card">
        {blogPosts.map((item, i) => {
          return (
            <BlogItem name={item.name} image={item.image === "" ? item.image : defaultImg} date={item.date} key={i} />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
