import "./styles.css";

const PopularItem = ({ name, newPrice, oldPrice, image, id }) => {
  return (
    <div className="item">
      <img src={image} alt={"image of" + name} />
      <h2>{name}</h2>
      <div>
        <span>
          <h4>${newPrice}</h4>
          <h4 className="old-price">${oldPrice}</h4>
        </span>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default PopularItem;
