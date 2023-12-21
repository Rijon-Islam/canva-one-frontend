import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const FreeTemplates = () => {
    const [user] = useAuthState(auth);
    const [canvas, setCanvas] = useState([]);



    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/Shah-Limon/em-list/master/data.json`)
            .then((res) => res.json())
            .then((info) => setCanvas(info));
    }, []);

    function shuffleArray(array) {
        // Function to shuffle an array using Fisher-Yates algorithm
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      
      // Assuming canvas is an array of data
      const shuffledCanvas = shuffleArray(canvas);


    return (
        <div>
            <section id="services" class="services-area pt-120 pb-90 fix" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">
                        <h2>You are buying 16000+ Readymade Canva Templates</h2> 

                        {
                            shuffledCanvas.slice(0, 48).map(canva =>   
                            <div className="col-lg-4 col-md-6">
                            <div className="product mb-40 bg-light p-2">
                                <div className="product__img">
                                    <a href="shop-details.html"><img src={canva.thumbnail} alt /></a>
                                    <div className="product-action text-center">
                                        <a href={canva.templateLinkforFB} target='_blink'>For Facebook</a>
                                        <a className='mt-3' href={canva.templateLinkforInstagram} target='_blink'>For Instagram</a>
                                    </div>
                                </div>
                                <div className="product__content text-center pt-30">
                                    <span className="pro-cat"><a href="#">{canva.categoryForFB}</a></span>
                                    
                                </div>
                            </div>
                        </div> )
                        }

                      





                    </div>
                </div>
            </section>
        </div>
    );
};

export default FreeTemplates;