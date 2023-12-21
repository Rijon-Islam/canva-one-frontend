import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecentProducts = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((info) => setProducts(info));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h2 class="text-2xl mb-9 mt-7 font-bold text-center bg-gradient-to-r from-blue-800 to-blue-900 text-transparent bg-clip-text animate-pulse hover:underline-offset-4">
        <h2> Recent Products </h2>
      </h2>
      <div className="container justify-center mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.map((product) => (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="rounded-lg"
              src={product.ProductImg}
              alt={product.ProductName}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {product.ProductName}
              </h2>

              <div className="mt-2 flex items-center">
                <span className="text-lg font-semibold text-gray-800">
                  ৳ {product.ProductPrice}
                </span>
                <span className="flex-1"></span>

                <Link
                  to={`/product-details/${product._id}`}
                  className="btn btn-primary"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <nav className="inline-flex">
          <ul className="pagination flex text-lg">
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index}
                className={`px-3 py-1 cursor-pointer ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-800"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default RecentProducts;
