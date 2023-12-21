import React, { useEffect, useState } from "react";
import './Products.css';
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((info) => setProducts(info));
  }, []);
  return (
    <div className="products container mx-auto gap-4">
      {products.map((product) => (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={product.ProductImg}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.ProductName}</h2>
            <div className="card-actions justify-end">
              <Link to={`/product-details/${product._id}`} className="btn btn-primary">Learn More</Link>
              <Link className="btn btn-primary">Add to Cart More</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
