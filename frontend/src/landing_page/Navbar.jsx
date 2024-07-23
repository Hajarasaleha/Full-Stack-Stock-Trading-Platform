import React from 'react';
import { Link } from "react-router-dom"

function Navbar() {
  return (<>
    <div className='container'>
      <div className='row p-0 m-0'>
        <nav class="navbar navbar-expand-lg fixed-top bg-white border-bottom">
          <div class="container-fluid p-0 m-0">
            <div className='col-6 p-0 m-0'>
              <Link class="navbar-brand" to="/">
                <img src="/media/images/logo.svg" alt="logo" style={{ width: "100px", height: "15px", marginLeft: "80px" }} />
              </Link>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="col-6 collapse navbar-collapse p-0 m-0" id="navbarSupportedContent" style={{ fontSize: "0.8rem" }}>
              <ul class="navbar-nav  me-auto mb-2 mb-lg-0 ">
                <li class="nav-item" style={{ marginRight: "15px", marginLeft: "20px" }}>
                  <Link class="nav-link" aria-current="page" to="/signup">Signup</Link>
                </li>
                <li class="nav-item" style={{ marginRight: "15px" }}>
                  <Link class="nav-link" to="/about">About</Link>
                </li>

                <li class="nav-item" style={{ marginRight: "15px" }}>
                  <Link class="nav-link" to="/products">Products</Link>
                </li>
                <li class="nav-item" style={{ marginRight: "15px" }}>
                  <Link class="nav-link" to="/pricing">Pricing</Link>
                </li>
                <li class="nav-item" style={{ marginRight: "15px" }}>
                  <Link class="nav-link" to="/support">Support</Link>
                </li>
              </ul>


            </div>
          </div>
        </nav>
      </div>
    </div>
  </>
  )
}

export default Navbar;