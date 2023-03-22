import React, { useEffect, useState } from 'react'
import doctor from './doctor.png'
import ambulance from './ambulance.png'
import medical_checkup from './medical_checkup.png'
import './style/Qualify.css'

const Quality = () => {
    const [item, setItem] = useState([])

    useEffect(() => {
        const url = "https://admin.tomedes.com/api/v1/get-reviews?page=1"
        // console.log(url)
        const promise = fetch(url)
        promise.then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data)
            setItem(data)
        }).catch((Error) => {
            // console.log(error)
        })
    }, [])
    console.log(item)
    return (
        <div>
            <div className='container mb-5' >
                <div className='row mt-5'>
                    <div className='col-md-6 mt-5' style={{ marginTop: "250px" }}>
                        <div style={{ marginTop: "450px" }}>

                            <h2 className='fs-1' style={{ wordSpacing: "1px", letterSpacing: "1px", color: "rgb(3, 3, 100)" }}>Clinic With Innovative</h2>
                            <p className='w-75 py-2'>Sed ullamcorper faucibus gravida. Donec urna elit, vestibulum eu volutpat sed, fringilla a nisl. Duis aliquam ante vitae cursus maximus. Cras vestibulum imperdiet facilisis.</p>
                            <button className='btn btn-primary rounded-5 px-5 fs-4'>Learn More</button>
                        </div>
                    </div>
                    <div className='col-md-6' style={{ marginTop: "250px" }}>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="card rounded rounded-5" style={{ boxShadow: "0px 0px 10px 3px gray" }}>
                                    <div className="card-body">
                                        <div className='doctor'>
                                            <img src={doctor} />
                                        </div>
                                        <span className='fs-3 fw-bold ' style={{ position: "relative", top: "-30px", color: "rgb(3, 3, 100)" }}>Qualified Doctor</span>
                                    </div>
                                </div>
                                <div className="card rounded rounded-5" style={{ marginTop: "150px", boxShadow: "0px 0px 10px 3px gray" }}>
                                    <div className="card-body">
                                        <div className='doctor'>
                                            <img src={ambulance} />
                                        </div>
                                        <span className='fs-3 fw-bold' style={{ position: "relative", top: "-30px", color: "rgb(3, 3, 100)" }}>24 Hours Service</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="card rounded rounded-5" style={{ marginTop: "200px", boxShadow: "0px 0px 10px 3px gray", }}>
                                    <div className="card-body">
                                        <div className='doctor'>
                                            <img src={medical_checkup} />
                                        </div>
                                        <span className='fs-3 fw-bold' style={{ position: "relative", top: "-30px", color: "rgb(3, 3, 100)" }}>Emergency Care</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='row' style={{marginTop:"300px"}}>
                    <div className='col-12'>
                        <h1 className='text-center' style={{color: "rgb(3, 3, 100)"}}>We Have The Best Specialist</h1>
                        <div className=' pt-2 pb-4 text-center' style={{width:"500px",margin:"0px auto"}}>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</div>
                    </div>
                    <div className='col-12'>
                        <div className="row row-cols-1 row-cols-md-4 g-4">
                            <div className="col">
                                <div className="card rounded rounded-4 card_shadow">
                                    <div className='me_khali'></div>
                                    <div className="card-body py-4">
                                        <h5 className="card-title">Dr. Awaatif Ali</h5>
                                        <p className="card-text">Dental Care</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card rounded rounded-4 card_shadow">
                                    <div className='me_khali'></div>
                                    <div class="card-body py-4">
                                        <h5 className="card-title">Dr. Filipa Gaspar</h5>
                                        <p className="card-text">Cardiology</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card rounded rounded-4 card_shadow">
                                    <div className='me_khali'></div>
                                    <div class="card-body py-4">
                                        <h5 class="card-title">Dr. Shukhmeet Gorae</h5>
                                        <p class="card-text">Neurological</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col shd" >
                                <div className="card rounded rounded-4 card_shadow">
                                    <div className='me_khali'></div>
                                    <div className="card-body py-4">
                                        <h5 className="card-title">Dr. Siri Jakobsson</h5>
                                        <p className="card-text">Prediatrics</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Quality
