import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const VideoSection = () => {


    const [video, setVideo] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/video`)
            .then((res) => res.json())
            .then((info) => setVideo(info));
    }, []);


    const handleVideoSection = (event) => {
        event.preventDefault();
        const watchText = event.target.watchText.value;
        const videoHeading = event.target.videoHeading.value;
        const videoImg = event.target.videoImg.value;
       

        const videoSection = {
            watchText,
            videoHeading,
            videoImg,
            


        };

        const url = `http://localhost:5000/add-video`;
        fetch(url, {
            method: "POST",
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
        <div className='container d-flex align-items-center justify-content-center'>
            <section id="services" class="services-area pt-120 pb-90 fix" >



                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h2> Update Canva Image </h2>

                            <form class="contact-form " onSubmit={handleVideoSection}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="watchText" placeholder="Text Section" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="videoHeading" placeholder="Section Heading" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="videoImg" placeholder="Section Image" required />
                                        </div>
                                    </div>


                                

                                    <div class="slider-btn">
                                        <button class="btn ss-btn" data-animation="fadeInRight" data-delay=".8s"> Update Section </button>
                                    </div>
                                </div>

                            </form>

                        </div>
                        <div className="row">
                            {
                                video.map(v =>
                                    <div className="col-lg-12 col-md-12">
                                        <div
                                            className="services-box wow fadeInDown animated"
                                            data-delay=".5s"
                                        >
                                            <div className="video__section__img">
                                                <img src={v.videoImg} alt="icon01" />
                                            </div>
                                            <div className="services-content2">

                                            <h6>{v.watchText}</h6>
                                                <h5>
                                                    <Link to={`/video/${v._id}`}>{v.videoHeading}</Link>
                                                </h5>
                                                
                                                
                                            </div>
                                        </div>
                                    </div>)

                            }





                        </div>

                    </div>
                </div>

            </section>
        </div>
    );
};

export default VideoSection;