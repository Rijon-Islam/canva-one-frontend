import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditFooterCopyright = () => {

    const [footercopyright, setFooterCopyright] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/copyrights/${id}`)
            .then((res) => res.json())
            .then((info) => setFooterCopyright(info));
    }, []);


    const handleFooterCopyright = (event) => {
        event.preventDefault();
        const copyrightText = event.target.copyrightText.value;




        const FooterCopyrightSection = {
            copyrightText,



        };

        const url = `http://localhost:5000/copyrights/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(FooterCopyrightSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Footer Copy Right Updated');
            });
    };



    return (
        <div>
            <section id="services" class="services-area pt-120 pb-90 fix" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">




                            <form class="contact-form " onSubmit={handleFooterCopyright}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="copyrightText" defaultValue={footercopyright.copyrightText} placeholder="Copyright Text" required />
                                        </div>
                                    </div>

                                    <div class="slider-btn">
                                        <button class="btn ss-btn" data-animation="fadeInRight" data-delay=".8s"> Update Footer Copyright</button>
                                    </div>
                                </div>

                            </form>










                        </div>




                    </div>
                </div>
            </section>
        </div>
    );
};

export default EditFooterCopyright;