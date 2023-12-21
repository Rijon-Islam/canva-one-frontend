import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./PlaceOrder.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const PlaceOrder = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [product, setProduct] = useState([]);
  const [cash, setCash] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:5000/cash-on-delivery`)
      .then((res) => res.json())
      .then((info) => setCash(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((info) => setProduct(info));
  }, [id]);

  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/payment-accounts`)
      .then((res) => res.json())
      .then((info) => setPayments(info));
  }, []);


  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const customerEmail = event.target.customerEmail.value;
    const ProductName = event.target.ProductName.value;
    const productId = event.target.productId.value;
    const ProductImg = event.target.ProductImg.value;
    const ProductPrice = event.target.ProductPrice.value;
    const paymentOptionName = event.target.paymentOptionName.value;
    const customerAccountNumber = event.target.customerAccountNumber.value;
    const paymentTRansactionID = event.target.paymentTRansactionID.value;

    const orderStatus = event.target.orderStatus.value;
    const paymentStatus = event.target.paymentStatus.value;
    const deliveryStatus = event.target.deliveryStatus.value;

    const customerName = event.target.customerName.value;
    const customerAddress = event.target.customerAddress.value;
    const customerUpozilaName = event.target.customerUpozilaName.value;
    const customerDistrictName = event.target.customerDistrictName.value;
    const customerPhoneNumber = event.target.customerPhoneNumber.value;

    const orderDetails = {
      customerEmail,
      ProductName,
      productId,
      ProductImg,
      ProductPrice,
      paymentOptionName,
      customerAccountNumber,
      paymentTRansactionID,
      orderStatus,
      paymentStatus,
      deliveryStatus,
      customerName,
      customerAddress,
      customerUpozilaName,
      customerDistrictName,
      customerPhoneNumber,
    };

    const url = `http://localhost:5000/new-order`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate(`/thank-you/${product._id}`);
      });
  };



  const handlePlaceOrderCashOnDelivery = (event) => {
    event.preventDefault();
    const customerEmail = event.target.customerEmail.value;
    const ProductName = event.target.ProductName.value;
    const productId = event.target.productId.value;
    const ProductImg = event.target.ProductImg.value;
    const ProductPrice = event.target.ProductPrice.value;
    const paymentOptionName = event.target.paymentOptionName.value;


    const orderStatus = event.target.orderStatus.value;
    const paymentStatus = event.target.paymentStatus.value;
    const deliveryStatus = event.target.deliveryStatus.value;

    const customerName = event.target.customerName.value;
    const customerAddress = event.target.customerAddress.value;
    const customerUpozilaName = event.target.customerUpozilaName.value;
    const customerDistrictName = event.target.customerDistrictName.value;
    const customerPhoneNumber = event.target.customerPhoneNumber.value;

    const orderDetails = {
      customerEmail,
      ProductName,
      productId,
      ProductImg,
      ProductPrice,
      paymentOptionName,
      orderStatus,
      paymentStatus,
      deliveryStatus,
      customerName,
      customerAddress,
      customerUpozilaName,
      customerDistrictName,
      customerPhoneNumber,
    };

    const url = `http://localhost:5000/new-order-cash-on-delivery`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate(`/thank-you/${product._id}`);
      });
  };

  return (
    <div className="container mx-auto max-w-md items-center">
      <h2 className="card-title">You are ordering {product.ProductName}</h2>
      <h2 className="card-title">Price {product.ProductPrice} Taka</h2>
      <h2>Select Payment Option</h2>
      {payments.map((payment, index) =>(
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            {payment.paymentOptionName}
          </div>
          <div className="collapse-content">
            <form onSubmit={handlePlaceOrder}>
              <h2>
                Our {payment.paymentOptionName} Account is{" "}
                {payment.paymentAccount}
              </h2>
              <h2>
                Account Type {payment.accountType}
              </h2>

              <input
                type="text"
                disabled
                name='customerEmail'
                value={user?.email}
                className="input input-bordered input-info w-full max-w-xs"
              />
              <input
                type="text"
                required
                name='customerAccountNumber'
                placeholder="Your Account Number"
                className="input input-bordered input-info w-full max-w-xs"
              />

               <input
                type="text"
                required
                name="paymentTRansactionID"
                placeholder ='Enter Transaction ID here'
                className="input input-bordered input-info w-full max-w-xs"
              />

              <input
                type="text"
                required
                hidden
                name="paymentOptionName"
                value={payment.paymentOptionName}
                className="input input-bordered input-info w-full max-w-xs"
              />
              <input
                type="text"
                required
                value="Pending"
                name="paymentStatus"            
                className="input input-bordered input-info w-full max-w-xs"
              />

              <input
              required
                type="text"
                hidden
                name="ProductName"
                value={product.ProductName}
                className="input input-bordered input-info w-full max-w-xs"
              />
              <input
                type="text"
                hidden
                name="productId"
                value={product._id}
                className="input input-bordered input-info w-full max-w-xs"
              />
              <input
                type="text"
                hidden
                name="ProductPrice"
                value={product.ProductPrice}
                className="input input-bordered input-info w-full max-w-xs"
              />
              <input
                type="text"
                hidden
                name="ProductImg"
                value={product.ProductImg}
                className="input input-bordered input-info w-full max-w-xs"
              />

              <input
                type="text"
                hidden
                name="orderStatus"
                value="Pending"
                className="input input-bordered input-info w-full max-w-xs"
              />
              <input
                type="text"
                hidden
                name="deliveryStatus"
                value="NotDelivered"
                className="input input-bordered input-info w-full max-w-xs"
              />

              <input
                type="text"
                required
                name="customerName"
                placeholder="Your Full Name"
                className="input input-bordered input-info w-full max-w-xs"
              />
              <br></br>
              <input
                type="text"
                required
                name="customerAddress"
                placeholder="Your Address"
                className="input input-bordered input-info w-full max-w-xs"
              />
              <br></br>
              <input
                type="text"
                required
                name="customerUpozilaName"
                placeholder="Your Upozila"
                className="input input-bordered input-info w-full max-w-xs"
              />
              <br></br>
              <input
                type="text"
                required
                name="customerDistrictName"
                placeholder="District"
                className="input input-bordered input-info w-full max-w-xs"
              />
              <br></br>
              <input
                type="number"
                required
                name="customerPhoneNumber"
                placeholder="Your Phone Number"
                className="input input-bordered input-info w-full max-w-xs"
              />
              <br></br>
              <input
                className="btn w-full max-w-xs"
                type="submit"
                value="Place Order"
              ></input>
            </form>
          </div>
        </div>
      ))}
      <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Cash on Delivery
          </div>
          <div className="collapse-content">
            <form onSubmit={handlePlaceOrderCashOnDelivery}>
              <input
                type="text"
                hidden
                name="paymentOptionName"
                value='CashOnDelivery'
                className="input input-bordered input-info w-full max-w-xs"
              />
              <input
                type="text"
                hidden
                name="ProductName"
                value={product.ProductName}
                className="input input-bordered input-info w-full max-w-xs"
              />
              <input
                type="text"
                hidden
                name="productId"
                value={product._id}
                className="input input-bordered input-info w-full max-w-xs"
              />
              <input
                type="text"
                hidden
                name="ProductPrice"
                value={product.ProductPrice}
                className="input input-bordered input-info w-full max-w-xs"
              />
              <input
                type="text"
                hidden
                name="ProductImg"
                value={product.ProductImg}
                className="input input-bordered input-info w-full max-w-xs"
              />

              <input
                type="text"
                hidden
                name="orderStatus"
                value="Pending"
                className="input input-bordered input-info w-full max-w-xs"
              />
              <input
                type="text"
                hidden
                name="paymentStatus"
                value="Unpaid"
                className="input input-bordered input-info w-full max-w-xs"
              />
              <input
                type="text"
                hidden
                name="deliveryStatus"
                value="NotDelivered"
                className="input input-bordered input-info w-full max-w-xs"
              />

              <input
                type="text"
                name="customerName"
                placeholder="Your Full Name"
                className="input input-bordered input-info w-full max-w-xs"
              />
              <br></br>
              <input
                type="text"
                name="customerAddress"
                placeholder="Your Address"
                className="input input-bordered input-info w-full max-w-xs"
              />
              <br></br>
              <input
                type="text"
                name="customerUpozilaName"
                placeholder="Your Upozila"
                className="input input-bordered input-info w-full max-w-xs"
              />
              <br></br>
              <input
                type="text"
                name="customerDistrictName"
                placeholder="District"
                className="input input-bordered input-info w-full max-w-xs"
              />
              <br></br>
              <input
                type="number"
                name="customerPhoneNumber"
                placeholder="Your Phone Number"
                className="input input-bordered input-info w-full max-w-xs"
              />
              <br></br>
              <input
                className="btn w-full max-w-xs"
                type="submit"
                value="Place Order"
              ></input>
            </form>
          </div>
        </div>

    </div>
  );
};

export default PlaceOrder;
