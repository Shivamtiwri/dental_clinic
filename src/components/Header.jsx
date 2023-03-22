import React from 'react'
import Quality from './Quality'
import Services from './Services'
import Say from './Say'
import './style/header.css'
import Footer from './Footer'

const Header = () => {
    return (
        <div>
        <div className='outer'>
                <div className='left_circle'></div>
                <div className='right_circle'></div>
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-12'>
                        <nav class="navbar navbar-expand-lg">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="#"><span className='text-primary fw-bold fs-3 text-center'>Medi<b className='text-warning'>Care+</b></span></a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                                    <ul class="navbar-nav px-5">
                                        <li class="nav-item">
                                            <div className='txt_hover'><a class="nav-link fw-bold px-4" aria-current="page" href="#">Home</a></div>
                                        </li>
                                        <li class="nav-item">
                                            <div className='txt_hover'><a class="nav-link px-4" href="#">About</a></div>

                                        </li>
                                        <li class="nav-item">
                                            <div className='txt_hover'><a class="nav-link px-4" href="#">Services</a></div>
                                        </li>
                                        <li class="nav-item">
                                            <div className='txt_hover'><a class="nav-link px-4 " href="#">News</a></div>
                                        </li>
                                        <li class="nav-item">
                                            <div className=''><a class="nav-link active bg-primary text-white rounded rounded-5 px-5" href="#">Contact</a></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className='container' style={{zIndex:"3"}}>
                    <div className='row'>
                        <div className='col-sm-6 mt-5'>
                            <div className='pt-5'>
                                <h5 className='pt-5 fw-bold'>Welcome to MediCare+ Clinic</h5>
                                <h1 className='head pt-2 pb-2'>Best Specialists</h1>
                                <p className='w-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Aliquam et imperdiet eros, nec laoreet turpis.
                                  Curabitur quis maximus ipsum, a condimentum tortor
                                  Curabitur quis maximus ipsum, a condimentum tortor
                                  </p>
                                  <div className='my_btn pt-2'>
                                  <div className='btn-hover'><a href="#" class="btn active rounded-5 px-3">Make an Appointment</a></div>
                                  <div className='btn-hover'><a href="#" class="btn  rounded-5 px-3">Departments</a></div>
                                  
                                  </div>
                            </div>
                        </div>
                        <div className='col-sm-6 mt-5'>
                            <div className='Khali'></div>
                        </div>
                    </div>
                </div>
            </div>
            <Services/>
            <Quality/>
            <Say/>
            <Footer/>

        </div>
        
        </div>
    )
}

export default Header
