import React, { useEffect, useState } from 'react';
import AdminMenu from '../../components/AdminMenu';
import { Link } from 'react-router-dom';

const Messages = () => {
    const [messages, setMessage] = useState([]);
    const [currentPageUnread, setCurrentPageUnread] = useState(1);
    const [currentPageRead, setCurrentPageRead] = useState(1);
    const [messagesPerPage] = useState(3);

    useEffect(() => {
        fetch(`http://localhost:5000/messages`)
            .then((res) => res.json())
            .then((info) => setMessage(info));
    }, []);

    const paginateUnread = (pageNumber) => setCurrentPageUnread(pageNumber);
    const paginateRead = (pageNumber) => setCurrentPageRead(pageNumber);

    const renderMessages = (messageStatus, currentPage, paginate) => {
        const filteredMessages = messages.filter(message => message.messageStatus === messageStatus);
        const indexOfLastMessage = currentPage * messagesPerPage;
        const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
        const currentMessages = filteredMessages.slice(indexOfFirstMessage, indexOfLastMessage);

        return (
            <tbody>
                {currentMessages.map((message, index) => (
                    <tr key={message._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{message.firstn}</td>
                        <td>{message.lastn}</td>
                        <td>{message.email}</td>
                        <td>{message.phone}</td>
                        <td>{message.messageStatus}</td>
                        <td>
                            <Link to={`/view/${message._id}`} className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">
                                View Message
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        );
    };

    const createPaginationItems = (totalPages, currentPage, paginate) => {
        const items = [];
        for (let number = 1; number <= totalPages; number++) {
            items.push(
                <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                    <a className="page-link" href="#" onClick={() => paginate(number)}>
                        {number}
                    </a>
                </li>,
            );
        }
        return items;
    };

    return (
        <>
            <section id="services" className="services-area pt-120 pb-90 fix">
                <div className="container">
                    <div className="row">
                        <div>
                            <h2>Welcome to Admin Panel</h2>
                            <AdminMenu />

                            <h2>Unread messages</h2>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Sl No.</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone Number</th>
                                        <th scope="col">Message Status</th>
                                        <th scope="col">Read Now</th>
                                    </tr>
                                </thead>
                                {renderMessages('UnRead', currentPageUnread, paginateUnread)}
                            </table>

                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className={`page-item ${currentPageUnread === 1 ? 'disabled' : ''}`}>
                                        <a className="page-link" href="#" onClick={() => paginateUnread(currentPageUnread - 1)}>
                                            Previous
                                        </a>
                                    </li>
                                    {createPaginationItems(
                                        Math.ceil(messages.filter(message => message.messageStatus === 'UnRead').length / messagesPerPage),
                                        currentPageUnread,
                                        paginateUnread,
                                    )}
                                    <li className={`page-item ${currentPageUnread === Math.ceil(messages.filter(message => message.messageStatus === 'UnRead').length / messagesPerPage) ? 'disabled' : ''}`}>
                                        <a className="page-link" href="#" onClick={() => paginateUnread(currentPageUnread + 1)}>
                                            Next
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                            <h2 className='mt-5'>Read messages</h2>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Sl No.</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone Number</th>
                                        <th scope="col">Message Status</th>
                                        <th scope="col">Read Now</th>
                                    </tr>
                                </thead>
                                {renderMessages('Read', currentPageRead, paginateRead)}
                            </table>

                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className={`page-item ${currentPageRead === 1 ? 'disabled' : ''}`}>
                                        <a className="page-link" href="#" onClick={() => paginateRead(currentPageRead - 1)}>
                                            Previous
                                        </a>
                                    </li>
                                    {createPaginationItems(
                                        Math.ceil(messages.filter(message => message.messageStatus === 'Read').length / messagesPerPage),
                                        currentPageRead,
                                        paginateRead,
                                    )}
                                    <li className={`page-item ${currentPageRead === Math.ceil(messages.filter(message => message.messageStatus === 'Read').length / messagesPerPage) ? 'disabled' : ''}`}>
                                        <a className="page-link" href="#" onClick={() => paginateRead(currentPageRead + 1)}>
                                            Next
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Messages;
