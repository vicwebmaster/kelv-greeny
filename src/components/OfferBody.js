import React from 'react'
import { Link } from 'react-router-dom'
const OfferBody = () => {
  return (
   <>
    <section className="inner-section offer-part">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="offer-card"><Link to="/"><img src="./Assest/images/offer/01.jpg" alt="offer"/></Link>
                        <div className="offer-div">
                            <h5 className="offer-code">RAMADAN20</h5><button className="offer-select">copy</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="offer-card"><Link to="/"><img src="./Assest/images/offer/02.jpg" alt="offer"/></Link>
                        <div className="offer-div">
                            <h5 className="offer-code">RAMADAN20</h5><button className="offer-select">copy</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="offer-card"><Link to="/"><img src="./Assest/images/offer/03.jpg" alt="offer"/></Link>
                        <div className="offer-div">
                            <h5 className="offer-code">RAMADAN20</h5><button className="offer-select">copy</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="offer-card"><Link to="/"><img src="./Assest/images/offer/04.jpg" alt="offer"/></Link>
                        <div className="offer-div">
                            <h5 className="offer-code">RAMADAN20</h5><button className="offer-select">copy</button>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </section>
   </>
  )
}

export default OfferBody
