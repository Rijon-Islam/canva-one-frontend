import React, { useEffect, useState } from 'react';
import AdminMenu from '../../components/AdminMenu';
import { Link } from 'react-router-dom';

const Messages = () => {

    const [messages, setMessage] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/messages`)
            .then((res) => res.json())
            .then((info) => setMessage(info));
    }, []);


    return (
        <>
            <section id="services" class="services-area pt-120 pb-90 fix" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div>
                            <h2>Welcome to Admin Panel</h2>
                            <AdminMenu></AdminMenu>

                            <h2>Unread messages</h2>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone Number</th>
                                        <th scope="col">Message Status</th>
                                        <th scope="col">Read Now</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {messages
                                        .filter(message => message.messageStatus === 'UnRead')
                                        .map((unreadMessage, index) => (
                                            <tr key={unreadMessage._id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{unreadMessage.firstn}</td>
                                                <td>{unreadMessage.lastn}</td>
                                                <td>{unreadMessage.email}</td>
                                                <td>{unreadMessage.phone}</td>
                                                <td>{unreadMessage.messageStatus}</td>
                                                <td>
                                                    <Link to={`/view/${unreadMessage._id}`} class="btn ss-btn " data-animation="fadeInRight" data-delay=".8s">
                                                        View Message
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>


                            <h2>Read messages</h2>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Fast Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone Number</th>
                                        <th scope="col">Message Status</th>
                                        <th scope="col">Read Now</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {messages
                                        .filter(message => message.messageStatus === 'Read')
                                        .map((readMessage, index) => (
                                            <tr key={readMessage._id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{readMessage.firstn}</td>
                                                <td>{readMessage.lastn}</td>
                                                <td>{readMessage.email}</td>
                                                <td>{readMessage.phone}</td>
                                                <td>{readMessage.messageStatus}</td>
                                                <td>
                                                    <Link to={`/view/${readMessage._id}`} class="btn ss-btn " data-animation="fadeInRight" data-delay=".8s">
                                                        View Message
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>



                        </div>


                    </div>
                </div>
            </section>



        </>
    );
};

export default Messages;