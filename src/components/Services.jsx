import React from 'react'
import './style/service.css'
import teeth from './teeth.png'
import { FaBeer, Fa500Px, FaAccessibleIcon } from 'react-icons/fa';
import { BiAccessibility } from "react-icons/bi";
import { TbDental,TbReportMedical } from "react-icons/tb";
import { GiDoctorFace } from "react-icons/gi";
import { RiLungsLine } from "react-icons/ri";
import { BiBrain } from "react-icons/bi";

const Services = () => {
    return (
        <div>
            <div className='container mb-5'>
                <div className='row mt-5'>
                    <div className='col-12'>
                        <h2 className='text-center pt-2 pb-2' style={{ color: "rgb(3, 3, 100)" }}>Our Services</h2>
                        <div className='' style={{ height: "50px", width: "560px", margin: "0px auto" }}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et imperdiet eros, nec laoreet turpis. Curabitur quis maximus ipsum, a condimentum tortor. </p></div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-3">
                        <div class="card cards">
                            <div class="card-body">
                                <span class="card-title" style={{ fontSize: "120px" }}>
                                    <TbDental />
                                </span>
                                <h2 className='heading' style={{ color: "rgb(3, 3, 100)" }}>Dental Care</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card cards">
                            <div class="card-body">
                                <span class="card-title" style={{ fontSize: "120px" }}>
                                    <RiLungsLine />
                                </span>
                                <h2 className='heading' style={{ color: "rgb(3, 3, 100)" }}>Dental Care</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card cards">
                            <div class="card-body">
                                <span class="card-title" style={{ fontSize: "120px" }}>
                                    <BiBrain />
                                </span>
                                <h2 className='heading' style={{ color: "rgb(3, 3, 100)" }}>Dental Care</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card cards">
                            <div class="card-body">
                                <span class="card-title" style={{ fontSize: "120px" }}>
                                    {/* <TbDental/> */}
                                    <TbReportMedical />
                                </span>
                                <h2 className='heading' style={{ color: "rgb(3, 3, 100)" }}>Dental Care</h2>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Services
