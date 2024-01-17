import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DashboardMenu = () => {
  const [orders, setorders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders`)
      .then((res) => res.json())
      .then((info) => setorders(info));
  }, [orders]);
  return (
    <div className="">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Menu
        </label>
      </div>
      <div>
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul>
          <li>
            <Link>Dashboard</Link>
          </li>
          <li>
            <Link to='/admin/dashboard/admin/customers'>All Customers</Link>
          </li>
          <li>
            <Link to="admin/orders">All Orders</Link>
            
          </li>
          <li>
            <Link to="/admin/dashboard/admin/delivered">All Delivered</Link>
          </li>
          <li>
          <Link to ='/add-product'>Add Product</Link>
          </li>
          <li>
          <Link to ='/admin/categories'>Categories</Link>
          </li>

          <li>
            <Link>Settings</Link>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default DashboardMenu;
