import React from 'react'
import { Link } from 'react-router-dom'
const AboutTeam = () => {
  return (
    <>
     <section className="inner-section about-team">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-heading">
                        <h2>our team members</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <ul className="row team-slider slider-arrow">
                        <li className='col-2'>
                            <figure className="team-media"><img src="./Assest/images/team/01.jpg" alt="team"/>
                                <div className="team-overlay"><Link to="#" className="icofont-facebook facebook"></Link><Link to="#"
                                        className="icofont-twitter twitter"></Link><Link to="#"
                                        className="icofont-linkedin linkedin"></Link></div>
                            </figure>
                            <div className="team-meta">
                                <h5><Link to="#">Jhonson Hononr</Link></h5>
                                <p>Founder & CEO</p>
                            </div>
                        </li>
                        <li className='col-2'>
                            <figure className="team-media"><img src="./Assest/images/team/02.jpg" alt="team"/>
                                <div className="team-overlay"><Link to="#" className="icofont-facebook facebook"></Link><Link to="#"
                                        className="icofont-twitter twitter"></Link><Link to="#"
                                        className="icofont-linkedin linkedin"></Link></div>
                            </figure>
                            <div className="team-meta">
                                <h5><Link to="#">Jhonson Hononr</Link></h5>
                                <p>Web developer</p>
                            </div>
                        </li>
                        <li className='col-2'>
                            <figure className="team-media"><img src="./Assest/images/team/03.jpg" alt="team"/>
                                <div className="team-overlay"><Link to="#" className="icofont-facebook facebook"></Link><Link to="#"
                                        className="icofont-twitter twitter"></Link><Link to="#"
                                        className="icofont-linkedin linkedin"></Link></div>
                            </figure>
                            <div className="team-meta">
                                <h5><Link to="#">Jhonson Hononr</Link></h5>
                                <p>graphics designer</p>
                            </div>
                        </li>
                        <li className='col-2'>
                            <figure className="team-media"><img src="./Assest/images/team/04.jpg" alt="team"/>
                                <div className="team-overlay"><Link to="#" className="icofont-facebook facebook"></Link><Link to="#"
                                        className="icofont-twitter twitter"></Link><Link to="#"
                                        className="icofont-linkedin linkedin"></Link></div>
                            </figure>
                            <div className="team-meta">
                                <h5><Link to="#">Jhonson Hononr</Link></h5>
                                <p>digital marketer</p>
                            </div>
                        </li>
                        <li className='col-2'>
                            <figure className="team-media"><img src="./Assest/images/team/05.jpg" alt="team"/>
                                <div className="team-overlay"><Link to="#" className="icofont-facebook facebook"></Link><Link to="#"
                                        className="icofont-twitter twitter"></Link><Link to="#"
                                        className="icofont-linkedin linkedin"></Link></div>
                            </figure>
                            <div className="team-meta">
                                <h5><Link to="#">Jhonson Hononr</Link></h5>
                                <p>article writer</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default AboutTeam
