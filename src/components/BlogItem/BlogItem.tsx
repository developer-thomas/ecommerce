import "./BlogItem.css";
import { BlogItemModel } from "../../models/BlogItem.interface";
import calendar from "../../assets/calendar.png";

const BlogItem = ({ name, image, date }: BlogItemModel) => {
  return (
    <div className="blog-item">
      <div className="blog-cards">
        <img className="blog-img" src={image} alt={name + " image"} />
        <div className="info">
          <span>
            <img src={calendar} alt="calendar image" />
            <h4>{date}</h4>
          </span>
          <h2>{name}</h2>
          <a href="">READ MORE</a>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
