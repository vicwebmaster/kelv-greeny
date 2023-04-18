import React from 'react'
import { Link } from 'react-router-dom'
const Cate = () => {
  return (
   <>
   <section className="section category-part">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading">
                        <h2>shop by categories</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <div className="category-slider slider-arrow">
                        <div className="category-wrap">
                            <div className="category-media">
                                <img src="./Assest/images/category/dairy.jpg" alt="category" />
                                <div className="category-overlay">
                                    <Link to="/Shop"><i className="fas fa-link"></i></Link>
                                </div>
                            </div>
                            <div className="category-meta">
                                <h4>dairy items</h4>
                                <p>(25 items)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-btn-50">
                        <Link to="/AllCart" className="btn btn-outline"><i className="fas fa-eye"></i><span>view all
                                category</span></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default Cate
