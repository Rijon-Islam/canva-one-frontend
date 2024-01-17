import React from "react";
import { Link } from "react-router-dom";

const CustomerMenu = () => {
  return (
    <div className="flex justify-center">
      <Link to='/my-orders' className="btn">My Orders</Link>
      <Link className="btn btn-primary">Shipping Addresses</Link>
      <Link className="btn btn-secondary">Account Setting</Link>
      <Link className="btn btn-accent">Button</Link>
      <Link className="btn btn-ghost">Button</Link>
    </div>
  );
};

export default CustomerMenu;
