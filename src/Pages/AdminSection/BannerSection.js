import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BannerSection = () => {

    const [banner, setBanner] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/banner`)
            .then((res) => res.json())
            .then((info) => setBanner(info));
    }, []);


    const handleBannerSection = (event) => {
        event.preventDefault();
        const bannerHeading = event.target.bannerHeading.value;
        const bannerDetails = event.target.bannerDetails.value;
        const bannerImage = event.target.bannerImage.value;


        const bannerSection = {
            bannerHeading,
            bannerDetails,
            bannerImage,

        };

        const url = `http://localhost:5000/add-banner`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bannerSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Banner is Updated');
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
                            <h2>Update Banner</h2>

                            {
                                banner.length === 1 &&
                                <>
                                    {
                                        banner.map(c =>
                                            banner.map(c=>
                                                <Link className='btn' to={`/banner/${c._id}`}> Please Banner Section</Link>)
                                        )
                                    }
                                </>
                            }
                            {
                                banner.length === 0 &&

                                <form class="contact-form " onSubmit={handleBannerSection}>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" id="firstn" name="bannerHeading" placeholder="Heading" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-email mb-20">
                                                <input type="text" id="lastn" name="bannerDetails" placeholder="Details" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-subject mb-20">
                                                <input type="text" id="email" name="bannerImage" placeholder="Banner Image" required />
                                            </div>
                                        </div>

                                        <div class="slider-btn">
                                            <button class="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">Update Banner</button>
                                        </div>
                                    </div>

                                </form>
                            }


                        </div>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default BannerSection;