import React from 'react'
import { Link } from 'react-router-dom'
const RelatedProd = () => {
  return (
    <>
     <section className="inner-section">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="section-heading">
                        <h2>related this items</h2>
                    </div>
                </div>
            </div>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                <div className="col">
                    <div className="product-card">
                        <div className="product-media">
                            <div className="product-label"><label className="label-text sale">sale</label></div><button
                                className="product-wish wish"><i className="fas fa-heart"></i></button><Link className="product-image"
                                to="/ProductInfo"><img src="./Assest/images/product/01.jpg" alt="product"/></Link>
                            <div className="product-widget"><Link title="Product Compare" to="/Compare"
                                    className="fas fa-random"></Link><Link title="Product View" to="/ProductInfo" className="fas fa-eye"
                                    data-bs-toggle="modal" data-bs-target="#product-view"></Link></div>
                        </div>
                        <div className="product-content">
                            <div className="product-rating"><i className="active icofont-star"></i><i
                                    className="active icofont-star"></i><i className="active icofont-star"></i><i
                                    className="active icofont-star"></i><i className="icofont-star"></i><Link
                                    to="/ProductInfo">(3)</Link></div>
                            <h6 className="product-name"><Link to="/ProductInfo">fresh green chilis</Link></h6>
                            <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button
                                className="product-add" title="Add to Cart"><i
                                    className="fas fa-shopping-basket"></i><span>add</span></button>
                            <div className="product-action"><button className="action-minus" title="Quantity Minus"><i
                                        className="icofont-minus"></i></button><input className="action-input"
                                    title="Quantity Number" type="text" name="quantity" value="1"/><button
                                    className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="product-card product-disable">
                        <div className="product-media">
                            <div className="product-label"><label className="label-text sale">sale</label></div><button
                                className="product-wish wish"><i className="fas fa-heart"></i></button><Link className="product-image"
                                to="/ProductInfo"><img src="./Assest/images/product/09.jpg" alt="product"/></Link>
                            <div className="product-widget"><Link title="Product Compare" to="/Compare"
                                    className="fas fa-random"></Link><Link title="Product View" to="/ProductInfo" className="fas fa-eye"
                                    data-bs-toggle="modal" data-bs-target="#product-view"></Link></div>
                        </div>
                        <div className="product-content">
                            <div className="product-rating"><i className="active icofont-star"></i><i
                                    className="active icofont-star"></i><i className="active icofont-star"></i><i
                                    className="active icofont-star"></i><i className="icofont-star"></i><Link
                                    to="/ProductInfo">(3)</Link></div>
                            <h6 className="product-name"><Link to="/ProductInfo">fresh green chilis</Link></h6>
                            <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button
                                className="product-add" title="Add to Cart"><i
                                    className="fas fa-shopping-basket"></i><span>add</span></button>
                            <div className="product-action"><button className="action-minus" title="Quantity Minus"><i
                                        className="icofont-minus"></i></button><input className="action-input"
                                    title="Quantity Number" type="text" name="quantity" value="1"/><button
                                    className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-btn-25"><Link to="/Shop" className="btn btn-outline"><i
                                className="fas fa-eye"></i><span>view all related</span></Link></div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default RelatedProd
