import React, { useEffect, useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishList] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("wishlist"));
    if (saveList) setWishList(saveList);
  }, []);

  const sortedItem = () => {
    if (sortOrder === "price-asc") {
      return [...wishlist].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-desc") {
      return [...wishlist].sort((a, b) => b.price - a.price);
    } else {
      return wishlist;
    }
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between py-5 items-center">
        <h1 className="text-2xl font-semibold">
          Wishlist
          <span className="text-sm text-gray-400">
            ({wishlist.length}) Product Found
          </span>
        </h1>
        <label>
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by price</option>
            <option value="price-asc">Low-&gt;High</option>
            <option value="price-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>
      <div className="space-y-3">
        {sortedItem().map((p) => (
          <div
            key={p.id}
            className="card card-side bg-base-100 shadow-sm w-[900px] py-1 px-3 my-3 items-center flex justify-between"
          >
            <img
              className="w-[200px] h-[200px]  rounded-2xl"
              src={p.image}
              alt={p.name}
            />

            <div className="card-body ml-10">
              <h2 className="card-title">{p.name}</h2>
              <p>
                <span className="font-semibold">Category</span>: ${p.category}
              </p>

              <p>
                <span className="font-semibold">Stock</span>: ${p.stock}
              </p>
              <p>
                <span className="font-semibold">Description</span>:{" "}
                {p.description}
              </p>
              <div className="card-actions justify-end">
                <p className="text-2xl">
                  <span className="font-semibold text-2xl">Price</span>: $
                  {p.price}
                </p>
                <button className="btn btn-primary">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
