import React from 'react'
import { Link } from 'react-router-dom'
const ShopBody = () => {
  return (
   <>
    <section className="inner-section shop-part">
        <div className="container">
            <div className="row content-reverse">
                <div className="col-lg-3">
                    <div className="shop-widget-promo"><Link to="#"><img src="./Assest/images/promo/shop/01.jpg" alt="promo"/></Link>
                    </div>
                    <div className="shop-widget">
                        <h6 className="shop-widget-title">Filter by Price</h6>
                        <form>
                            <div className="shop-widget-group"><input type="text" placeholder="Min - 00"/><input type="text"
                                    placeholder="Max - 5k"/></div><button className="shop-widget-btn"><i
                                    className="fas fa-search"></i><span>search</span></button>
                        </form>
                    </div>
                    <div className="shop-widget">
                        <h6 className="shop-widget-title">Filter by Rating</h6>
                        <form>
                            <ul className="shop-widget-list">
                                <li>
                                    <div className="shop-widget-content"><input type="checkbox" id="feat1"/><label
                                            for="feat1"><i className="fas fa-star active"></i><i
                                                className="fas fa-star active"></i><i className="fas fa-star active"></i><i
                                                className="fas fa-star active"></i><i
                                                className="fas fa-star active"></i></label></div><span
                                        className="shop-widget-number">(13)</span>
                                </li>
                                <li>
                                    <div className="shop-widget-content"><input type="checkbox" id="feat2"/><label
                                            for="feat2"><i className="fas fa-star active"></i><i
                                                className="fas fa-star active"></i><i className="fas fa-star active"></i><i
                                                className="fas fa-star active"></i><i className="fas fa-star"></i></label></div>
                                    <span className="shop-widget-number">(28)</span>
                                </li>
                            </ul><button className="shop-widget-btn"><i className="far fa-trash-alt"></i><span>clear
                                    filter</span></button>
                        </form>
                    </div>
                    <div className="shop-widget">
                        <h6 className="shop-widget-title">Filter by Tag</h6>
                        <form>
                            <ul className="shop-widget-list">
                                <li>
                                    <div className="shop-widget-content"><input type="checkbox" id="tag1"/><label
                                            for="tag1">new items</label></div><span
                                        className="shop-widget-number">(13)</span>
                                </li>
                                <li>
                                    <div className="shop-widget-content"><input type="checkbox" id="tag2"/><label
                                            for="tag2">sale items</label></div><span
                                        className="shop-widget-number">(28)</span>
                                </li>
                            </ul><button className="shop-widget-btn"><i className="far fa-trash-alt"></i><span>clear
                                    filter</span></button>
                        </form>
                    </div>
                    <div className="shop-widget">
                        <h6 className="shop-widget-title">Filter by Brand</h6>
                        <form><input className="shop-widget-search" type="text" placeholder="Search..."/>
                            <ul className="shop-widget-list shop-widget-scroll">
                                <li>
                                    <div className="shop-widget-content"><input type="checkbox" id="brand1"/><label
                                            for="brand1">mari gold</label></div><span
                                        className="shop-widget-number">(13)</span>
                                </li>
                                <li>
                                    <div className="shop-widget-content"><input type="checkbox" id="brand2"/><label
                                            for="brand2">tredar</label></div><span
                                        className="shop-widget-number">(28)</span>
                                </li>
                               
                            </ul><button className="shop-widget-btn"><i className="far fa-trash-alt"></i><span>clear
                                    filter</span></button>
                        </form>
                    </div>
                    <div className="shop-widget">
                        <h6 className="shop-widget-title">Filter by Category</h6>
                        <form><input className="shop-widget-search" type="text" placeholder="Search..."/>
                            <ul className="shop-widget-list shop-widget-scroll">
                                <li>
                                    <div className="shop-widget-content"><input type="checkbox" id="cate1"/><label
                                            for="cate1">vegetables</label></div><span
                                        className="shop-widget-number">(13)</span>
                                </li>
                                <li>
                                    <div className="shop-widget-content"><input type="checkbox" id="cate2"/><label
                                            for="cate2">groceries</label></div><span
                                        className="shop-widget-number">(28)</span>
                                </li>
                                
                            </ul><button className="shop-widget-btn"><i className="far fa-trash-alt"></i><span>clear
                                    filter</span></button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="top-filter">
                                <div className="filter-show"><label className="filter-label">Show :</label><select
                                        className="form-select filter-select">
                                        <option value="1">12</option>
                                        <option value="2">24</option>
                                        <option value="3">36</option>
                                    </select></div>
                                <div className="filter-short"><label className="filter-label">Short by :</label><select
                                        className="form-select filter-select">
                                        <option selected>default</option>
                                        <option value="3">trending</option>
                                        <option value="1">featured</option>
                                        <option value="2">recommend</option>
                                    </select></div>
                                <div className="filter-action"><Link to="/Shop" title="Three Column"><i
                                            className="fas fa-th"></i></Link><Link to="/Shop" title="Two Column"><i
                                            className="fas fa-th-large"></i></Link><Link to="/Shop"
                                        title="One Column"><i className="fas fa-th-list"></i></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4">
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label"><label className="label-text new">new</label></div><button
                                        className="product-wish wish"><i className="fas fa-heart"></i></button><Link
                                        className="product-image" to="/ProductInfo"><img src="./Assest/images/product/01.jpg"
                                            alt="product"/></Link>
                                    <div className="product-widget"><Link title="Product Compare" to="/Compare"
                                            className="fas fa-random"></Link><Link title="Product View"
                                            to="/ProductInfo" className="fas fa-eye" data-bs-toggle="modal"
                                            data-bs-target="#product-view"></Link></div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating"><i className="active icofont-star"></i><i
                                            className="active icofont-star"></i><i className="active icofont-star"></i><i
                                            className="active icofont-star"></i><i className="icofont-star"></i><Link
                                            to="/ProductInfo">(3)</Link></div>
                                    <h6 className="product-name"><Link to="/ProductInfo">fresh green chilis</Link></h6>
                                    <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6>
                                    <button className="product-add" title="Add to Cart"><i
                                            className="fas fa-shopping-basket"></i><span>add</span></button>
                                    <div className="product-action"><button className="action-minus" title="Quantity Minus"><i
                                                className="icofont-minus"></i></button><input className="action-input"
                                            title="Quantity Number" type="text" name="quantity" value="1"/><button
                                            className="action-plus" title="Quantity Plus"><i
                                                className="icofont-plus"></i></button></div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label"><label className="label-text sale">sale</label></div><button
                                        className="product-wish wish"><i className="fas fa-heart"></i></button><Link
                                        className="product-image" to="/ProductInfo"><img src="./Assest/images/product/02.jpg"
                                            alt="product"/></Link>
                                    <div className="product-widget"><Link title="Product Compare" to="/Compare"
                                            className="fas fa-random"></Link><Link title="Product View"
                                            to="/ProductInfo" className="fas fa-eye" data-bs-toggle="modal"
                                            data-bs-target="#product-view"></Link></div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating"><i className="active icofont-star"></i><i
                                            className="active icofont-star"></i><i className="active icofont-star"></i><i
                                            className="active icofont-star"></i><i className="icofont-star"></i><Link
                                            to="/ProductInfo">(3)</Link></div>
                                    <h6 className="product-name"><Link to="/ProductInfo">fresh green chilis</Link></h6>
                                    <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6>
                                    <button className="product-add" title="Add to Cart"><i
                                            className="fas fa-shopping-basket"></i><span>add</span></button>
                                    <div className="product-action"><button className="action-minus" title="Quantity Minus"><i
                                                className="icofont-minus"></i></button><input className="action-input"
                                            title="Quantity Number" type="text" name="quantity" value="1"/><button
                                            className="action-plus" title="Quantity Plus"><i
                                                className="icofont-plus"></i></button></div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label"><label className="label-text off">-10%</label></div><button
                                        className="product-wish wish"><i className="fas fa-heart"></i></button><Link
                                        className="product-image" to="/ProductInfo"><img src="./Assest/images/product/03.jpg"
                                            alt="product"/></Link>
                                    <div className="product-widget"><Link title="Product Compare" to="/Compare"
                                            className="fas fa-random"></Link><Link title="Product View"
                                            to="/ProductInfo" className="fas fa-eye" data-bs-toggle="modal"
                                            data-bs-target="#product-view"></Link></div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating"><i className="active icofont-star"></i><i
                                            className="active icofont-star"></i><i className="active icofont-star"></i><i
                                            className="active icofont-star"></i><i className="icofont-star"></i><Link
                                            to="/ProductInfo">(3)</Link></div>
                                    <h6 className="product-name"><Link to="/ProductInfo">fresh green chilis</Link></h6>
                                    <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6>
                                    <button className="product-add" title="Add to Cart"><i
                                            className="fas fa-shopping-basket"></i><span>add</span></button>
                                    <div className="product-action"><button className="action-minus" title="Quantity Minus"><i
                                                className="icofont-minus"></i></button><input className="action-input"
                                            title="Quantity Number" type="text" name="quantity" value="1"/><button
                                            className="action-plus" title="Quantity Plus"><i
                                                className="icofont-plus"></i></button></div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label"><label className="label-text feat">feature</label></div>
                                    <button className="product-wish wish"><i className="fas fa-heart"></i></button><Link
                                        className="product-image" to="/ProductInfo"><img src="./Assest/images/product/04.jpg"
                                            alt="product"/></Link>
                                    <div className="product-widget"><Link title="Product Compare" to="/Compare"
                                            className="fas fa-random"></Link><Link title="Product View"
                                            to="/ProductInfo" className="fas fa-eye" data-bs-toggle="modal"
                                            data-bs-target="#product-view"></Link></div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating"><i className="active icofont-star"></i><i
                                            className="active icofont-star"></i><i className="active icofont-star"></i><i
                                            className="active icofont-star"></i><i className="icofont-star"></i><Link
                                            to="/ProductInfo">(3)</Link></div>
                                    <h6 className="product-name"><Link to="/ProductInfo">fresh green chilis</Link></h6>
                                    <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6>
                                    <button className="product-add" title="Add to Cart"><i
                                            className="fas fa-shopping-basket"></i><span>add</span></button>
                                    <div className="product-action"><button className="action-minus" title="Quantity Minus"><i
                                                className="icofont-minus"></i></button><input className="action-input"
                                            title="Quantity Number" type="text" name="quantity" value="1"/><button
                                            className="action-plus" title="Quantity Plus"><i
                                                className="icofont-plus"></i></button></div>
                                </div>
                            </div>
                        </div>
                     
                        
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bottom-paginate">
                                <p className="page-info">Showing 12 of 60 Results</p>
                                <ul className="pagination">
                                    <li className="page-item"><Link className="page-link" to="/"><i
                                                className="fas fa-long-arrow-alt-left"></i></Link></li>
                                    <li className="page-item"><Link className="page-link active" to="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                    <li className="page-item">...</li>
                                    <li className="page-item"><Link className="page-link" to="#">60</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#"><i
                                                className="fas fa-long-arrow-alt-right"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default ShopBody
