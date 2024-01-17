import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const ITEMS_PER_PAGE = 24;

const PremiumTemplates = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const [canvas, setCanvas] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:5000/orders`)
      .then((res) => res.json())
      .then((info) => setOrders(info));
  }, []);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/Shah-Limon/canvaProjectImage/main/canva16000.json`)
      .then((res) => res.json())
      .then((info) => setCanvas(info));
  }, []);

  // Filter canvas based on the search query
  const filteredCanvas = canvas.filter((canva) =>
    canva.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate total pages based on the number of items
  const totalPages = Math.ceil(filteredCanvas.length / ITEMS_PER_PAGE);

  // Paginate the canvas based on the current page
  const paginatedCanvas = filteredCanvas.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxButtonsToShow = 3;

    for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + maxButtonsToShow - 1); i++) {
      buttons.push(
        <li className={`page-item ${i === currentPage ? 'active' : ''}`} key={i}>
          <button className="page-link" onClick={() => setCurrentPage(i)}>
            {i}
          </button>
        </li>
      );
    }

    return buttons;
  };

  return (
    <div>
      <section id="services" className="services-area pt-120 pb-90 fix">
        <div className="container">
          <h2>You are buying 16000+ Readymade Canva Templates</h2>
          <div className="col-lg-12">
            <div className="contact-field p-relative c-name mb-20">
              <input
                type="text"
                placeholder="Search e.g., Restaurant, Food"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <div className="row">
              {paginatedCanvas.map((canva) => (
                <div className="col-lg-4 col-md-6" key={canva.id}>
                  <div className="product mb-40 bg-light p-2">
                    <div className="product__img">
                      <a href="#">
                        <img src={canva.image} alt="Canva-Template" />
                      </a>
                      <div className="product-action text-center">
                        <a href={canva.facebook} target="_blank" rel="noopener noreferrer">
                          For Facebook
                        </a>
                        <a className="mt-3" href={canva.instagram} target="_blank" rel="noopener noreferrer">
                          For Instagram
                        </a>
                      </div>
                    </div>
                    
                  </div>
                </div>
              ))}
            </div>
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
                    Previous
                  </button>
                </li>
                {renderPaginationButtons()}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}>
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremiumTemplates;
