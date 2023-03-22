import React from 'react'
import './style/Footer.css'
import { TfiFacebook } from "react-icons/tfi";
import { ImGoogle } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
    return (
        <div>
            <div class="container">
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><span className='text-primary fw-bold fs-3 text-center'>Medi<b className='text-warning'>Care+</b></span></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link text-primary pe-5 active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-primary pe-5" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-primary pe-5" href="#">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-primary " href="#">News</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='footer'>
                            <div style={{display:"flex", paddingTop:"50px",paddingLeft:"80px"}}>
                                <div className='py-3' style={{color:"gray"}}><TfiFacebook className='bg-white fs-1 rounded-5 py-2'/></div>
                                <div className='py-3 ps-2' style={{color:"gray"}}><ImGoogle className=' bg-white fs-1 rounded-5 py-2'/></div>
                                <div className='py-3 ps-2' style={{color:"gray"}}><BsTwitter className=' bg-white fs-1 rounded-5 py-2'/></div>
                            </div>
                            <div className='' style={{color:"gray",fontSize:"14px",paddingLeft:"80px"}}>
                            ©2020 PodPayment - 2020
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
