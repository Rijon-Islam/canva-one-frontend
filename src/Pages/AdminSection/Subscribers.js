import React, { useEffect, useState } from 'react';
import AdminMenu from '../../components/AdminMenu';

const Subscribers = () => {
  const [subscribers, setSubscriber] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  useEffect(() => {
    fetch(`http://localhost:5000/subscribers`)
      .then((res) => res.json())
      .then((info) => setSubscriber(info));
  }, []);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSubscribers = subscribers.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section id="services" class="services-area pt-120 pb-90 fix">
      <div class="container">
        <div class="row"></div>
        <h2>Welcome to Admin Panel</h2>
        <><AdminMenu></AdminMenu></>
        <div class="row">
          <h3>Total Subscribers</h3>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Sl No.</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {currentSubscribers.map((subscribe, index) => (
                <tr key={subscribe._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{subscribe.subscriberEmail}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Your desired pagination */}
          <nav aria-label="...">
            <ul class="pagination">
              <li class={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <a class="page-link" href="#" tabindex="-1" onClick={() => paginate(currentPage - 1)}>
                  Previous
                </a>
              </li>
              {Array.from({ length: Math.ceil(subscribers.length / itemsPerPage) }).map((_, index) => (
                <li key={index} class={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                  <a class="page-link" href="#" onClick={() => paginate(index + 1)}>
                    {index + 1}
                    {index + 1 === currentPage && <span class="sr-only">(current)</span>}
                  </a>
                </li>
              ))}
              <li class={`page-item ${currentPage === Math.ceil(subscribers.length / itemsPerPage) ? 'disabled' : ''}`}>
                <a class="page-link" href="#" onClick={() => paginate(currentPage + 1)}>
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Subscribers;
