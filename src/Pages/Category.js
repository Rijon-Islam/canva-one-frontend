import React, { useEffect, useState } from "react";
import "./Products.css";
import { Link, useParams } from "react-router-dom";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/category/${id}`)
      .then((res) => res.json())
      .then((info) => setCategory(info));
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((info) => setProducts(info));
  }, []);
  return (
    <>
      <h2 className="text-center text-2xl font-bold my-7">Category: {category.Category}</h2>
      <div className="products container mx-auto">
        {products.map(
          (product) =>
            category._id === id &&
            category.Category === product.Category && (
              <div className="card w-96 bg-base-100 shadow-xl mt-16">
                <figure>
                  <img src={product.ProductImg} alt={product.ProductName} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.ProductName}</h2>
                  <div className="card-actions justify-end">
                    <Link
                      to={`/product-details/${product._id}`}
                      className="btn btn-primary"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default Category;
