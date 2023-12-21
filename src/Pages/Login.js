import React from "react";
import auth from "../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

const Login = () => {


  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2>Login Now</h2>

          <form class="contact-form container mt-5" onSubmit={handleSubmit(onSubmit)}>
            <div class="row">
              <div class="col-lg-12">
                <div class="contact-field p-relative c-name mb-20">
                  <input {...register("email", { required: true })} type="email" id="firstn" placeholder="Email" required />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="contact-field p-relative c-email mb-20">
                  <input {...register("password", { required: true })} type="password" id="lastn" placeholder="Password" required />
                </div>
              </div>


              <div class="slider-btn">
                <button class="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">Login Now.</button>
              </div>
            </div>

          </form>




          <div className="container">
            <div className="divider">OR</div>

            <button
              className="btn btn-outline btn-primary"
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
