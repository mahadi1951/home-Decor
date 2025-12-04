import React from "react";

const ProductCard = ({ product }) => {
  const { name, image, price, category, description } = product;
  return (
    <div className="card bg-base-100 w-96 shadow-sm hover:scale-105 transition ease-in-out">
      <figure className="h-48 overflow-hidden ">
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          <span className="font-semibold">Category</span>: ${category}
        </p>
        <p>
          <span className="font-semibold">Price</span>: ${price}
        </p>
        <p>
          <span className="font-semibold">Description</span>: {description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
