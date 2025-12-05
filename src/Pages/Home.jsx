import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import useProducts from "../Hooks/useProducts";
import { ArrowRight } from "lucide";

const Home = () => {
  // const products = useLoaderData();
  const { products, loading, error } = useProducts();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  const featureProducts = products.slice(0, 6);

  return (
    <div>
      <div className="flex justify-between py-5 items-center">
        <h1 className="text-2xl font-semibold">Featured Products</h1>
        <Link className="btn btn-outline" to="/products">
          See All Products
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3 mb-3">
        {featureProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
      <div className="flex justify-center py-2 ">
        <Link className="btn btn-outline" to="/products">
          See All Products
        </Link>
      </div>
    </div>
  );
};

export default Home;
