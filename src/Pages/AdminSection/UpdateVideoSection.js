import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const UpdateVideoSection = () => {

    const [video, setVideo] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/video/${id}`)
            .then((res) => res.json())
            .then((info) => setVideo(info));
    }, [id]);


    const handleVideoSection = (event) => {
        event.preventDefault();
        const watchText = event.target.watchText.value;
        const videoHeading = event.target.videoHeading.value;
        const videoImg = event.target.videoImg.value;
        const videoLink = event.target.videoLink.value;


        const videoSection = {
            watchText,
            videoHeading,
            videoImg,
            videoLink,


        };

        const url = `http://localhost:5000/update-video/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(videoSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Video Section is Updated');
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
                            <h2> Update Video </h2>


                            <form class="contact-form " onSubmit={handleVideoSection}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="watchText" defaultValue={video.watchText} placeholder="Watch Us" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="videoHeading" defaultValue={video.videoHeading} placeholder=" Video Heading" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="videoImg" defaultValue={video.videoImg} placeholder="video Image" required />
                                        </div>
                                    </div>


                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="videoLink" defaultValue={video.videoLink} placeholder="video Link" required />
                                        </div>
                                    </div>

                                    <div class="slider-btn">
                                        <button class="btn ss-btn" data-animation="fadeInRight" data-delay=".8s"> Update Video Section </button>
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

export default UpdateVideoSection;