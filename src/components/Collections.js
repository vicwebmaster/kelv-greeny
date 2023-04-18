import React from 'react'
import { Link } from 'react-router-dom'
const Collections = () => {
  return (
   <>
       <section className="section newitem-part">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="section-heading">
                        <h2>collected new items</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <ul className="new-slider slider-arrow">
                        <li>
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text new">new</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i></button><Link className="product-image"
                                        to="/ProductInfo"><img src="./Assest/images/product/15.jpg" alt="product" /></Link>
                                    <div className="product-widget">
                                        <Link title="Product Compare" to="/Compare" className="fas fa-random"></Link><Link
                                            title="Product View" to="/ProductInfo" className="fas fa-eye" data-bs-toggle="modal"
                                            data-bs-target="#product-view"></Link>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i><i className="active icofont-star"></i><i
                                            className="active icofont-star"></i><i className="active icofont-star"></i><i
                                            className="icofont-star"></i><Link to="product-video.html">(3)</Link>
                                    </div>
                                    <h6 className="product-name">
                                        <Link to="product-video.html">fresh green chilis</Link>
                                    </h6>
                                    <h6 className="product-price">
                                        <span>$28<small>/piece</small></span>
                                    </h6>
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
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="section-btn-25">
                        <Link to="/Shop" className="btn btn-outline"><i className="fas fa-eye"></i><span>view all new
                                item</span></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default Collections
