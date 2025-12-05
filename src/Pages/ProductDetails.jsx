import React from "react";
import { useParams } from "react-router-dom";
import useProducts from "../Hooks/useProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading product data</p>;

  const product = products.find((item) => item.id === parseInt(id));
  const {
    name,
    image,
    price,
    category,
    description,
    stock,
    dimensions,
    material,
  } = product;

  const handleAddToWishlist = () => {
    const existingList = JSON.parse(localStorage.getItem("wishlist"));
    let updateList = [];
    if (existingList) {
      const isDuplicate = existingList.some((p) => p.id === product.id);
      if (isDuplicate) return alert(" This items Already added");
      updateList = [...existingList, product];
    } else {
      updateList.push(product);
    }
    localStorage.setItem("wishlist", JSON.stringify(updateList));
  };

  return (
    <div className="flex justify-between gap-15 py-5 my-3 border rounded-2xl">
      <div className="px-4">
        <img
          className="w-[400px] h-[400px] rounded-2xl  shadow ml-4"
          src={image}
          alt=""
        />
      </div>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <p>
          <span className="font-semibold">Category</span>: ${category}
        </p>
        <p>
          <span className="font-semibold">Price</span>: ${price}
        </p>
        <p>
          <span className="font-semibold">Stock</span>: ${stock}
        </p>
        <p>
          <span className="font-semibold">Dimensions</span>: ${dimensions}
        </p>
        <p>
          <span className="font-semibold">Material</span>: ${material}
        </p>
        <p>
          <span className="font-semibold">Description</span>: {description}
        </p>
        <div className="card-actions justify-end">
          <button onClick={handleAddToWishlist} className="btn">
            Add To Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
