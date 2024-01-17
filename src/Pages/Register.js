import React from "react";
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


const Register = () => {
    const [gUser, gLoading] = useSignInWithGoogle(auth);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const navigate = useNavigate();
    const [logo, setLogo] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/logo`)
            .then((res) => res.json())
            .then((info) => setLogo(info));
    }, []);
    const [createUserWithEmailAndPassword, user, loading] =
        useCreateUserWithEmailAndPassword(auth);

    if (loading || gLoading) {
        return <loading></loading>;
    }

    if (user || gUser) {
        console.log(user || gUser);
    }

    const onSubmit = (data) => {
        console.log(data);
        createUserWithEmailAndPassword(data.email, data.password);
        navigate("/");
    };


    return (
        <>

            <div className="flex justify-center items-center h-screen">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body vh-100 d-flex justify-content-center align-items-center flex-column">


                        <form class="contact-form container mt-5" onSubmit={handleSubmit(onSubmit)}>
                            <h2 className="mb-30">Register Now</h2>
                            <div class="row mb-10">
                                <div class="col-7">
                                    <div class="contact-field p-relative c-name mb-20">
                                        <input
                                            type="text"

                                            id="usernameInput"
                                            placeholder="Enter your Email"
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: "Email is Required",
                                                },
                                                pattern: {
                                                    value: /[A-Za-z]{3}/,
                                                    message: "Provide a Valid Email",
                                                },
                                            })}
                                        />
                                    </div>
                                </div>
                                <div class="col-7">
                                    <div class="contact-field p-relative c-email mb-20">
                                        <input
                                            type="password"

                                            id="passwordInput"
                                            placeholder="Enter your password"
                                            {...register("password", {
                                                required: {
                                                    value: true,
                                                    message: "Password is Required",
                                                },
                                                minLength: {
                                                    value: 6,
                                                    message: "Minimum 6 Characters",
                                                },
                                            })}
                                        />
                                    </div>
                                </div>
                                <div class="col-7">
                                    <p>Already Have not account <Link to="/Login"> Login Now</Link></p>
                                    <div class="slider-btn">
                                        <button class="btn ss-btn btn-lg" data-animation="fadeInRight" data-delay=".8s">Register Now</button>
                                    </div>
                                </div>



                            </div>

                        </form>
                    </div>
                </div>
            </div>




        </>
    );
};

export default Register;