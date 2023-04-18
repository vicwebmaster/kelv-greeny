import React from 'react'
import { Link } from 'react-router-dom'
const Brand = () => {
  return (
    <>
    <section class="section brand-part">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-heading">
                        <h2>shop by brands</h2>
                    </div>
                </div>
            </div>
            <div class="brand-slider slider-arrow">
                <div class="brand-wrap">
                    <div class="brand-media">
                        <img src="./Assest/images/brand/01.jpg" alt="brand" />
                        <div class="brand-overlay">
                            <Link to="brand-single.html"><i class="fas fa-link"></i></Link>
                        </div>
                    </div>
                    <div class="brand-meta">
                        <h4>natural greeny</h4>
                        <p>(45 items)</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-btn-50">
                        <Link to="/Brand" class="btn btn-outline"><i class="fas fa-eye"></i><span>view all
                                brands</span></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Brand
