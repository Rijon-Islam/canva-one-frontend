import React, { useEffect, useState } from "react";
import "./AddProduct.css";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [variations, setVariations] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products-variation`)
      .then((res) => res.json())
      .then((info) => setVariations(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/categories`)
      .then((res) => res.json())
      .then((info) => setCategories(info));
  }, []);

  const handleAddProduct = (event) => {
    event.preventDefault();
    const Category = event.target.Category.value;
    const ProductName = event.target.ProductName.value;
    const ProductDetails = event.target.ProductDetails.value;
    const ProductImg = event.target.ProductImg.value;
    const ProductPrice = event.target.ProductPrice.value;

    const productInfo = {
      Category,
      ProductName,
      ProductDetails,
      ProductImg,
      ProductPrice,
    };

    const url = `http://localhost:5000/add-product`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/");
      });
  };

  return (
    <div className="container mx-auto items-center">
      <h2>Add New Products</h2>
      <form onSubmit={handleAddProduct}>
        <select name="Category">
          <option disabled selected>
            Select a category
          </option>
          {
            categories.map(category =>
                <option>{category.Category}</option>
                )
          }
          
        </select>

        <br></br>
        <input
          type="text"
          name="ProductName"
          placeholder="Product Title"
        ></input>{" "}
        <br></br>
        <input
          type="textarea"
          name="ProductDetails"
          placeholder="Product Details"
        ></input>{" "}
        <br></br>
        <select name="Category">
          <option disabled selected>
            Select a Variation
          </option>
          {
            variations.map(variation =>
                <option>{variation.variationName}</option>
                )
          }
          
        </select>
        <br></br>
        <input
          type="text"
          name="ProductImg"
          placeholder="Product Image URL"
        ></input>{" "}
        <br></br>
        <input
          type="number"
          name="ProductPrice"
          placeholder="Product Price"
        ></input>{" "}
        <br></br>
        <input className="btn btn-lg" type="submit" value="Add Product"></input>
      </form>
    </div>
  );
};

export default AddProduct;
