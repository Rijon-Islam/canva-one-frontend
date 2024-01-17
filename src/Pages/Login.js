import React from "react";
import auth from "../firebase.init";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {


  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit, } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };


  const [profile] = useAuthState(auth);
  const navigate = useNavigate();

  if (profile) {
    navigate("/dashboard");
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body vh-100 d-flex justify-content-center align-items-center flex-column">


          <form class="contact-form container mt-5" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="mt-30">Login Now</h2>
            <div class="row mb-10">
              <div class="col-7">
                <div class="contact-field p-relative c-name mb-20">
                  <input {...register("email", { required: true })} type="email" id="firstn" placeholder="Email" required />
                </div>
              </div>
              <div class="col-7">
                <div class="contact-field p-relative c-email mb-20">
                  <input {...register("password", { required: true })} type="password" id="lastn" placeholder="Password" required />
                </div>
              </div>
              <div class="col-7">
                <p>  Don't have an account ?<Link to="/register"> Create Now</Link></p>
                <div class="slider-btn">
                  <button class="btn ss-btn btn-lg" data-animation="fadeInRight" data-delay=".8s">Login Now</button>
                </div>
              </div>



            </div>

          </form>




          <div className="container">
            <div className="divider mt-10">OR</div>

            <button
              className="btn btn-outline btn-primary mt-10"
              onClick={() => signInWithGoogle()}
            >
              Join With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
