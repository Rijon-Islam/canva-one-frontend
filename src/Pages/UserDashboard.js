import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import UserDashboardMenu from './UserDashboardMenu';
import { Table, Pagination } from 'react-bootstrap';

const UserDashboard = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5; // Number of orders to display per page

  useEffect(() => {
    fetch(`http://localhost:5000/orders`)
      .then((res) => res.json())
      .then((info) => setOrders(info));
  }, []);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders
    .filter((order) => order.customerEmail === user?.email)
    .slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section id="services" className="services-area pt-120 pb-90 fix">
      <div className="container">
        <div></div>
        <div>
          <h2>Welcome to User Dashboard</h2>
          <UserDashboardMenu></UserDashboardMenu>
          <h3>Your Order List</h3>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Order Date</th>
                <th>Your Name</th>
                <th>Price</th>
                <th>Order Status</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((order, index) => (
                <tr key={order._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{order.orderDate}</td>
                  <td>{order.customerName}</td>
                  <td>${order.packagePrice}</td>
                  <td>{order.orderStatus}</td>
                  <td>
                    {order.paymentStatus === 'UnPaid' && (
                      <Link className="btn ss-btn" to={`/pay-now/${order._id}`}>
                        Pay Now
                      </Link>
                    )}
                    {order.paymentStatus === 'Paid' && (
                      <Link className="btn ss-btn" to="#">
                        You Have Paid
                      </Link>
                    )}
                    {order.paymentStatus === 'Cancelled' && (
                      <Link className="btn ss-btn" to="#">
                        You Have Cancelled
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <nav aria-label="...">
            <ul className="pagination">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <span className="page-link" onClick={() => paginate(currentPage - 1)}>
                  Previous
                </span>
              </li>
              {Array.from({ length: Math.ceil(orders.length / ordersPerPage) }, (_, index) => (
                <li key={index + 1} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                  <span className="page-link" onClick={() => paginate(index + 1)}>
                    {index + 1}
                  </span>
                </li>
              ))}
              <li className={`page-item ${currentPage === Math.ceil(orders.length / ordersPerPage) ? 'disabled' : ''}`}>
                <span className="page-link" onClick={() => paginate(currentPage + 1)}>
                  Next
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;
