import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {


    const [logo, setLogo] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/logo`)
            .then((res) => res.json())
            .then((info) => setLogo(info));
    }, []);



    const handleLogo = (event) => {
        event.preventDefault();
        const logo = event.target.logo.value;



        const logoSection = {
            logo,


        };

        const url = `http://localhost:5000/add-logo`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(logoSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Logo is Updated');
            });
    };



    return (
        <>
            <section id="services" class="services-area pt-120 pb-90 fix mt-5" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h2> Update Your Logo</h2>

                            {
                                logo.length === 1 &&
                                <>
                                    {
                                        logo.map(c =>
                                            logo.map(c =>
                                                <Link className='btn' to={`/edit-logo/${c._id}`}> Please Edit Your Logo</Link>)


                                        )
                                    }
                                </>
                            }
                            {
                                logo.length === 0 &&

                                <form class="contact-form " onSubmit={handleLogo}>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" id="firstn" name="logo" placeholder="Submit Your Logo" required />
                                            </div>
                                        </div>

                                        <div class="slider-btn">
                                            <button class="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">Update Your Logo</button>
                                        </div>
                                    </div>

                                </form>
                            }

                        </div>


                    </div>
                </div>
            </section>



        </>
    );
};

export default Logo;