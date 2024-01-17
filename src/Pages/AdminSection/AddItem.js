import React from 'react';

const AddItem = () => {

    const handleAddItem = (event) => {
        event.preventDefault();
        const format = event.target.format.value;
        const canvaLink = event.target.canvaLink.value;
        const imageLink = event.target.imageLink.value;
        const category = event.target.category.value;
        const freeOrPaid = event.target.freeOrPaid.value;


        const addItem = {
            format,
            canvaLink,
            imageLink,
            category,
            freeOrPaid,

        };

        const url = `http://localhost:5000/add-item`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addItem),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Item is Updated');
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
                            <form class="contact-form " onSubmit={handleAddItem}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-subject mb-20">
                                            <select name="format" id="cars">
                                                <option value="Facebook">Facebook</option>
                                                <option value="Instagram">InstaGram</option>
                                                <option value="Youtube">YouTube</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" name="canvaLink" placeholder="Canva Link" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-email mb-20">
                                            <input type="text" name="imageLink" placeholder="Image Link" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-subject mb-20">
                                            <input type="text" name="category" placeholder="Category" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-subject mb-20">
                                            <select name="freeOrPaid" id="cars">
                                                <option value="Paid">Paid</option>
                                                <option value="Free">Free</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="slider-btn">
                                        <button class="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">Add Item</button>
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

export default AddItem;