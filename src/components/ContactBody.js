import React from 'react'
import { Link } from 'react-router-dom'
const ContactBody = () => {
  return (
   <>
    <section class="inner-section contact-part">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <div class="contact-card"><i class="icofont-location-pin"></i>
                        <h4>head office</h4>
                        <p>1Hd- 50, 010 Avenue, NY 90001 United States</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="contact-card active"><i class="icofont-phone"></i>
                        <h4>phone number</h4>
                        <p><Link to="Tel:0092155599">009-215-5596 <span>(toll free)</span></Link><Link to="tel:0092155595">009-215-5595</Link></p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="contact-card"><i class="icofont-email"></i>
                        <h4>Support mail</h4>
                        <p><Link to="mailto:contact@example.com">contact@example.com</Link><Link to="mailto:info@example.com">info@example.com</Link></p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="contact-map"><iframe title='map'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.3406974350205!2d90.48469931445422!3d23.663771197998262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b0d5983f048d%3A0x754f30c82bcad3cd!2sJalkuri%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1605354966349!5m2!1sen!2sbd" aria-hidden="false" tabindex="0"></iframe></div>
                </div>
                <div class="col-lg-6">
                    <form class="contact-form">
                        <h4>Drop Your Thoughts</h4>
                        <div class="form-group">
                            <div class="form-input-group"><input class="form-control" type="text"
                                    placeholder="Your Name"/><i class="icofont-user-alt-3"></i></div>
                        </div>
                        <div class="form-group">
                            <div class="form-input-group"><input class="form-control" type="text"
                                    placeholder="Your Email"/><i class="icofont-email"></i></div>
                        </div>
                        <div class="form-group">
                            <div class="form-input-group"><input class="form-control" type="text"
                                    placeholder="Your Subject"/><i class="icofont-book-mark"></i></div>
                        </div>
                        <div class="form-group">
                            <div class="form-input-group"><textarea class="form-control"
                                    placeholder="Your Message"></textarea><i class="icofont-paragraph"></i></div>
                        </div><button type="submit" class="form-btn-group"><i class="fas fa-envelope"></i><span>send
                                message</span></button>
                    </form>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-md-6 col-lg-3">
                    <div class="branch-card"><img src="./Assest/images/branch/01.jpg" alt="branch"/>
                        <div class="branch-overlay">
                            <h3>dhaka</h3>
                            <p>kawran bazar, 1100 east tejgaon, dhaka.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-3">
                    <div class="branch-card"><img src="./Assest/images/branch/02.jpg" alt="branch"/>
                        <div class="branch-overlay">
                            <h3>Narayanganj</h3>
                            <p>west jalkuri, 1420 shiddirganj, narayanganj.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-3">
                    <div class="branch-card"><img src="./Assest/images/branch/03.jpg" alt="branch"/>
                        <div class="branch-overlay">
                            <h3>chandpur</h3>
                            <p>east lautuli, 2344 faridganj, chandpur.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-3">
                    <div class="branch-card"><img src="./Assest/images/branch/04.jpg" alt="branch"/>
                        <div class="branch-overlay">
                            <h3>noakhli</h3>
                            <p>begumganj, 3737 shonaimuri, noakhli.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default ContactBody
