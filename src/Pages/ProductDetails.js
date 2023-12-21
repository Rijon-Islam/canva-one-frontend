import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// const ProductDetails = () => {
//     const {id} = useParams();
//     const [product, setProduct] = useState([]);
//     useEffect(() => {
//         fetch(`http://localhost:5000/product${id}`)
//           .then((res) => res.json())
//           .then((info) => setProduct(info));
//       }, [product]);


//   return (
//     <div>
//       <div className="hero min-h-screen bg-base-200">
//         <div className="hero-content flex-col lg:flex-row">
//           <img
//             src={product.ProductImg}
//           />
//           <div>
//             <h1 className="text-5xl font-bold">{product.ProductName}</h1>
//             <p className="py-6">
//               Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//               excepturi exercitationem quasi. In deleniti eaque aut repudiandae
//               et a id nisi.
//             </p>
//             <button className="btn btn-primary">Get Started</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
  
    useEffect(() => {
      fetch(`http://localhost:5000/product/${id}`)
        .then((res) => res.json())
        .then((info) => setProduct(info));
    }, [id]);
  
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img className="rounded-lg" src={product.ProductImg} alt={product.ProductName} />
            <div>
              <h1 className="text-5xl font-bold capitalize">{product.ProductName}</h1>
              <p className="py-6">
              <h2 className="text-2xl font-bold mb-2">Price: {product.ProductPrice}</h2>
              {product.ProductDetails}
              </p>
              <Link to={`/place-order/${product._id}`} className="btn btn-primary">Buy Now</Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  


export default ProductDetails;
