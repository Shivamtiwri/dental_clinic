import React from 'react'
import off_mind from './off_mind.png'
import patient2 from './patiant2.jpg'

const Say = () => {
    return (
        <div className='container'>
            <div className='row' style={{ paddingTop: "150px", paddingBottom: "50px" }}>
                <div className='col-12'>
                    <h2 className='' style={{ color: "rgb(3, 3, 100)", }}>What Our Customers Say</h2>
                </div>
                <div class="col-sm-6 pt-4">
                    <div class="card rounded-4">
                        <div class="card-body ">
                        <div className='comma'>"</div>
                            <p class="card-text p-4" style={{textAlign:"justify"}}>With supporting text below as a natural lead-in to additional content.
                            Maecenas ac aliquam est. Vivamus ut volutpat risus. Nunc tincidunt dui et augue vehicula, eget imperdiet nibh pulvinar. Vivamus elementum tempus eros sit amet bibendum.</p>
                            <div className='flex'>
                                <div><img className='offMind mt-2' src={off_mind} /></div>
                                <div>
                                <span className='px-3 fs-4 fw-bold' style={{ color: "rgb(3, 3, 100)", }}>Jacqueline Asong</span> <br/>
                                <span className='px-3'>Patient</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 pt-4">
                    <div class="card rounded-4">
                        <div class="card-body ">
                        <div className='comma'>"</div>
                            <p class="card-text p-4" style={{textAlign:"justify"}}>With supporting text below as a natural lead-in to additional content.
                            Maecenas ac aliquam est. Vivamus ut volutpat risus. Nunc tincidunt dui et augue vehicula, eget imperdiet nibh pulvinar. Vivamus elementum tempus eros sit amet bibendum.</p>
                            <div className='flex'>
                                <div><img className='offMind mt-2' src={patient2} /></div>
                                <div>
                                <span className='px-3 fs-4 fw-bold' style={{ color: "rgb(3, 3, 100)", }}>Patricia Ribeiro</span> <br/>
                                <span className='px-3'>Patient</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-5 mb-5'>
            <div className='col-12 bg-primary rounded'>
                <div className='text-center fs-2 fw-bold text-white pt-4'>Subscribe to Newsletter</div>
                <div className='text-center text-white pt-2' style={{fontSize:"13px"}}>We have a wide experience in experience design and strategy</div>
                <div className='inpForm mb-5'>
                    <div className='' style={{float:"left"}}>
                        Enter Your Email Address
                    </div>
                    <div className='px-3' style={{float:"right"}}><a className='bg-primary text-white px-3 py-2 rounded-4' style={{textDecoration:"none"}}>Send Now</a></div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Say
