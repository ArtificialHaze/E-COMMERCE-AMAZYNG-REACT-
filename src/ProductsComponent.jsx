import React, { useState } from "react";
import Plane from "./assets/plane.png";
import { ProductsData } from "./products";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const ProductsComponent = () => {
  const [menuProducts, setMenuProducts] = useState(ProductsData);

  const [parent] = useAutoAnimate();

  const filterProducts = (type) => {
    setMenuProducts(ProductsData.filter((item) => item.type === type));
  };

  return (
    <div className="products-container">
      <img src={Plane} alt="Plane" />
      <h1>Our featured products</h1>
      <div className="products">
        <ul className="products-menu">
          <li onClick={() => setMenuProducts(ProductsData)}>All</li>
          <li onClick={() => filterProducts("skin care")}>Skin Care</li>
          <li onClick={() => filterProducts("conditioner")}>Conditioners</li>
          <li onClick={() => filterProducts("foundation")}>Foundations</li>
        </ul>
        <div className="list" ref={parent}>
          {menuProducts.map((menuProduct, index) => (
            <div className="product" key={index}>
              <div className="left-slide">
                <div className="name">
                  <span>{menuProduct.name}</span>
                  <span>{menuProduct.detail}</span>
                </div>
                <span>{menuProduct.price} $</span>
                <div>Show now</div>
              </div>
              <img
                src={menuProduct.img}
                alt="Product-Image"
                className="img-product"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsComponent;
