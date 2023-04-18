import React from 'react'
import { Link } from 'react-router-dom'
const BrandTest = () => {
  return (
   <>
    <section className="inner-section about-testimonial">
        <div className="container">
            <ul className="testi-slider slider-arrow">
                <li>
                    <div className="testi-content"><Link className="testi-img" to="/About"><img src="./Assest/images/testimonial/01.jpg"
                                alt="testimonial"/></Link>
                        <div className="testi-quote"><i className="icofont-quote-left"></i>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit neque earum sapiente vitae
                                obcaecati magnam doloribus magni provident ab ipsam sint dolores repellat inventore
                                sequi temporibus natus.</p>
                            <h4>tahmina labonno</h4>
                            <h6>Former MD - joomtech.com</h6>
                        </div>
                    </div>
                </li>
               
            </ul>
        </div>
    </section>
   </>
  )
}

export default BrandTest
