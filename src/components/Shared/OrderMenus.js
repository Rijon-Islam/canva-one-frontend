import React from 'react';
import { Link } from 'react-router-dom';

const OrderMenus = () => {
    return (
        <div>
            <div className="flex justify-center">
            <Link to='/admin/order/pending' className="btn btn-outline btn-success">Pending Orders</Link>
            <Link to='/admin/order/delivered' className="btn btn-outline btn-success">Delivered Orders</Link>
            <Link to='/admin/order/cancelled' className="btn btn-outline btn-success">Cancelled Orders</Link>
            <Link to='/admin/order/unpaid' className="btn btn-outline btn-success">Unpaid Orders</Link>
          </div>
        </div>
    );
};

export default OrderMenus;