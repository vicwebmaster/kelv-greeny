import React from 'react'
import { Link } from 'react-router-dom'
import ServiceInfo from './ServiceInfo'
const SideBar = () => {
  return (
    <>
    <section className="banner-part">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="banner-category">
              <div className="banner-category-head">
                <i className="fas fa-bars"></i><span>top categories</span>
              </div>
              <ul className="banner-category-list">
                <li className="banner-category-item">
                  <Link to="#"><i className="flaticon-vegetable"></i><span>vegetables</span></Link>
                
                  <div className="banner-category-dropdown">
                    <h5>vegetables item</h5>
                    <div className="banner-sub-category">
                      <ul>
                        <li><Link to="#">carrot</Link></li>
                        <li><Link to="#">broccoli</Link></li>
                        <li><Link to="#">asparagus</Link></li>
                        <li><Link to="#">cauliflower</Link></li>
                        <li><Link to="#">cucumber</Link></li>
                      </ul>
                      <ul>
                        <li><Link to="#">eggplant</Link></li>
                        <li><Link to="#">green pepper</Link></li>
                        <li><Link to="#">lettuce</Link></li>
                        <li><Link to="#">mushrooms</Link></li>
                        <li><Link to="#">onion</Link></li>
                      </ul>
                      <ul>
                        <li><Link to="#">potato</Link></li>
                        <li><Link to="#">pumpkin</Link></li>
                        <li><Link to="#">tomato</Link></li>
                        <li><Link to="#">beetroot</Link></li>
                        <li><Link to="#">zucchini</Link></li>
                      </ul>
                      <ul>
                        <li><Link to="#">radish</Link></li>
                        <li><Link to="#">artichoke</Link></li>
                        <li><Link to="#">cabbage</Link></li>
                        <li><Link to="#">celery</Link></li>
                        <li><Link to="#">parsley</Link></li>
                      </ul>
                    </div>
                  </div>
                </li>
              
                
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-12">
                <div className="home-grid-slider slider-dots">
                  <div className="banner-wrap bg1">
                    <div className="row align-items-center">
                      <div className="col-md-6 col-lg-6">
                        <div className="banner-content">
                          <h2>
                            we are delivered organic foods item within 24 hours.
                          </h2>
                          <Link to="#" className="btn btn-inline"
                            ><i className="fas fa-shopping-basket"></i
                            ><span>shop now</span></Link>
                          
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6">
                        <div className="banner-image">
                          <img src="./Assest/images/home/index/01.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="banner-promo">
                  <Link to="#"
                    ><img src="./Assest/images/promo/home/04.jpg" alt="promo"
                  /></Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="banner-promo">
                  <Link to="#"
                    ><img src="./Assest/images/promo/home/05.jpg" alt="promo"
                  /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ServiceInfo/>
    </>
  )
}

export default SideBar
