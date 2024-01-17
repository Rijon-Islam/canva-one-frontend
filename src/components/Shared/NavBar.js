import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const NavBar = () => {
  
  const [admin, setAdmin] = useState([]);
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }

  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);


  
  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((info) => setAdmin(info));
  }, []);


  return (
    <>
      <div>
        <header className="header-area header-three pt-3 pb-3">
          <div >
            <div className="container">
              <div className="second-menu">
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-2">

                    {
                      logo.map(l => <div className="logo">
                        <a href="/">
                          <img src={l.logo} alt="logo" />
                        </a>
                      </div>)
                    }

                  </div>
                  <div className="col-xl-8 col-lg-8">
                    <div className="main-menu text-right text-xl-right">
                      <nav id="mobile-menu" style={{ display: "block" }}>
                        <ul>
                          <li className="sub">
                            <Link to="/">Home</Link>
                          </li>


                          <li>
                            <Link to="/contact-us">Contact Us</Link>
                          </li>

                          {
                            user?.email ?
                              <li>
                                <Link onClick={handleSignOut}>Signout</Link>
                              </li>
                              :
                              <li>
                                <Link to="/login">Login Now</Link>
                              </li>
                          }

                          {
                            user?.email ?
                              <li>
                                <Link to="/dashboard" class="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">Dashboard</Link>

                              </li>
                              :
                              <></>
                          }
                          <li>



                          </li>

                          {
                            admin.map(e => e.userEmail === user?.email &&

                              <li>
                                <Link to="/admin" className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">Admin</Link>
                              </li>
                            )
                          }



                        </ul>
                      </nav>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="mobile-menu" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="offcanvas-menu">
          <span className="menu-close">
            <i className="fas fa-times" />
          </span>
          <form
            role="search"
            method="get"
            id="searchform"
            className="searchform"
            action="http://wordpress.zcube.in/xconsulta/"
          >
            <input
              type="text"
              name="s"
              id="search"
              defaultValue
              placeholder="Search"
            />
            <button>
              <i className="fa fa-search" />
            </button>
          </form>
          <div id="cssmenu3" className="menu-one-page-menu-container">
            <ul id="menu-one-page-menu-2" className="menu">
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <Link to="/">Home</Link>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div id="cssmenu2" className="menu-one-page-menu-container">
            <ul id="menu-one-page-menu-1" className="menu">
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a href="#home">
                  <span>+8 12 3456897</span>
                </a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a href="#howitwork">
                  <span>info@example.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="offcanvas-overly" />
      </div>
    </>
  );
};

export default NavBar;
