import React from 'react'
import { Link } from 'react-router-dom'
const ViewProduct = () => {
  return (
   <>
    <section className="inner-section">
        <div className="container">
          
            <div className="row">
                <div className="col-lg-6">
                    <div className="product-grid"><img src="./Assest/images/product/01.jpg" alt="product"/><img
                            src="./Assest/images/product/01.jpg" alt="product"/><img src="./Assest/images/product/01.jpg"
                            alt="product"/><img src="./Assest/images/product/01.jpg" alt="product"/></div>
                </div>
                <div className="col-lg-6">
                    <div className="details-content">
                        <h3 className="details-name"><Link to="/ProductInfo">existing product name</Link></h3>
                        <div className="details-meta">
                            <p>SKU:<span>1234567</span></p>
                            <p>BRAND:<Link to="#">radhuni</Link></p>
                        </div>
                        <div className="details-rating"><i className="active icofont-star"></i><i
                                className="active icofont-star"></i><i className="active icofont-star"></i><i
                                className="active icofont-star"></i><i className="icofont-star"></i><Link to="#">(3 reviews)</Link>
                        </div>
                        <h3 className="details-price"><del>$38.00</del><span>$24.00<small>/per kilo</small></span></h3>
                        <p className="details-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum
                            natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores
                            quibusdam.</p>
                        <div className=" details-list-group"><label className="details-list-title">tags:</label>
                            <ul className="details-tag-list">
                                <li><Link to="#">organic</Link></li>
                                <li><Link to="#">fruits</Link></li>
                                <li><Link to="#">chilis</Link></li>
                            </ul>
                        </div>
                        <div className=" details-list-group"><label className="details-list-title">Share:</label>
                            <ul className=" details-share-list">
                                <li><Link to="#" className="icofont-facebook" title="Facebook"></Link></li>
                                <li><Link to="#" className="icofont-twitter" title="Twitter"></Link></li>
                                <li><Link to="#" className="icofont-linkedin" title="Linkedin"></Link></li>
                                <li><Link to="#" className="icofont-instagram" title="Instagram"></Link></li>
                            </ul>
                        </div>
                        <div className="details-add-group"><button className="product-add" title="Add to Cart"><i
                                    className="fas fa-shopping-basket"></i><span>add to cart</span></button>
                            <div className="product-action"><button className="action-minus" title="Quantity Minus"><i
                                        className="icofont-minus"></i></button><input className="action-input"
                                    title="Quantity Number" type="text" name="quantity" value="1"/><button
                                    className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                            </div>
                        </div>
                        <div className="details-action-group"><Link className="details-wish wish" to="/Wishlist"
                                title="Add Your Wishlist"><i className="icofont-heart"></i><span>add to wish</span></Link><Link
                                className="details-compare" to="/Compare" title="Compare This Item"><i
                                    className="fas fa-random"></i><span>Compare This</span></Link></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default ViewProduct
