import React from 'react'
import { Link } from 'react-router-dom'
const GreenyShop = ({Title}) => {
  return (
    <>
     <section className="inner-section single-banner" style={{background: "url(./Assest/images/single-banner.jpg) no-repeat center;"}}>
        <div className="container">
            <h2>{Title}</h2>
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{Title}</li>
            </ol>
        </div>
    </section>
    </>
  )
}

export default GreenyShop
