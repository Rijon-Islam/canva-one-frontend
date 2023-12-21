import React, { useEffect, useState } from 'react';

const Subscribers = () => {


    const [subscribers, setSubscriber] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/subscribers`)
            .then((res) => res.json())
            .then((info) => setSubscriber(info));
    }, []);


    return (

        <section id="services" class="services-area pt-120 pb-90 fix" >
            <div class="container">
                <div class="row">

                </div>
                <div class="row">

                    <h3>Total Subscribers</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subscribers.map((subscribe, index) => (
                                <tr key={subscribe._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{subscribe.subscriberEmail}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>



                </div>
            </div>
        </section>

    );
};

export default Subscribers;