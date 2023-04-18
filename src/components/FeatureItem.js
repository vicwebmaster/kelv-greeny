import React from 'react'
import { Link } from 'react-router-dom'
const FeatureItem = () => {
  return (
   <>
    <section className="section feature-part">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-heading">
                        <h2>our featured items</h2>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
                <div className="col">
                    <div className="feature-card">
                        <div className="feature-media">
                            <div className="feature-label">
                                <label className="label-text feat">feature</label>
                            </div>
                            <button className="feature-wish wish">
                                <i className="fas fa-heart"></i></button><Link className="feature-image"
                                to="/ProductInfo"><img src="./Assest/images/product/09.jpg" alt="product" /></Link>
                            <div className="feature-widget">
                                <Link title="Product Compare" to="/Compare" className="fas fa-random"></Link><Link
                                    title="Product View" to="/ProductInfo" className="fas fa-eye" data-bs-toggle="modal"
                                    data-bs-target="#product-view"></Link>
                            </div>
                        </div>
                        <div className="feature-content">
                            <h6 className="feature-name">
                                <Link to="/ProductInfo">fresh organic green chilis</Link>
                            </h6>
                            <div className="feature-rating">
                                <i className="active icofont-star"></i><i className="active icofont-star"></i><i
                                    className="active icofont-star"></i><i className="active icofont-star"></i><i
                                    className="icofont-star"></i><Link to="/ProductInfo">(3 Reviews)</Link>
                            </div>
                            <h6 className="feature-price">
                                <span>$28<small>/piece</small></span>
                            </h6>
                            <p className="feature-desc">
                                Lorem ipsum dolor sit consectetur adipisicing xpedita dicta
                                amet olor ut eveniet commodi...
                            </p>
                            <button className="product-add" title="Add to Cart">
                                <i className="fas fa-shopping-basket"></i><span>add</span>
                            </button>
                            <div className="product-action">
                                <button className="action-minus" title="Quantity Minus">
                                    <i className="icofont-minus"></i></button><input className="action-input"
                                    title="Quantity Number" type="text" name="quantity" value="1" /><button
                                    className="action-plus" title="Quantity Plus">
                                    <i className="icofont-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
               
               
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-btn-25">
                        <Link to="/Shop" className="btn btn-outline"><i className="fas fa-eye"></i><span>view all
                                feature</span></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default FeatureItem
