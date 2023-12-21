import React, { useEffect, useState } from "react";

const VideoSection = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/video`)
      .then((res) => res.json())
      .then((info) => setVideo(info));
  }, []);

  return (
    <>
      {
        video.map(v =>
          <section
            id="vedio"
            className="vedio-area pt-120 pb-90 fix"
            style={{
              backgroundImage: "url(img/video/vedio-bg.png)",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title center-align text-center">
                    <h5>{v.watchText}</h5>
                    <h2>{v.videoHeading}</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div
                    className="video-img wow fadeInRight animated"
                    data-animation="fadeInDown animated"
                    data-delay=".2s"
                    style={{
                      backgroundImage: `url(${v.videoImg})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  >
                    
                  </div>
                </div>
              </div>
            </div>
          </section>)

      }

    </>
  );
};

export default VideoSection;
