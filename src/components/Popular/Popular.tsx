import { useState } from "react";
import "./styles.css";
import data from "../../data/data";
import PopularItem from "../PopularItem/PopularItem";

const Popular = () => {
  const [popularLink, setPopularLink] = useState<string>("Best Sellers");

  return (
    <div className="popular">
      <div className="popular-link">
        <h1
          onClick={() => setPopularLink("Best Sellers")}
          className={popularLink === "Best Sellers" ? "act-popular" : ""}
        >
          Best Sellers
        </h1>
        <h1
          onClick={() => setPopularLink("New Arrivals")}
          className={popularLink === "New Arrivals" ? "act-popular" : ""}
        >
          New Arrivals
        </h1>
        <h1 onClick={() => setPopularLink("Hot Sales")} className={popularLink === "Hot Sales" ? "act-popular" : ""}>
          Hot Sales
        </h1>
      </div>
      <div className="product-popular">
        {/* adicionar os cards com um map de acordo com o valor da category que está dentro de data */}
        {data.map((item) => {
          if (item.category === popularLink) {
            return (
              <PopularItem
                name={item.name}
                newPrice={item.newPrice}
                oldPrice={item.oldPrice}
                image={item.image}
                id={item.id}
                key={item.id}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Popular;
