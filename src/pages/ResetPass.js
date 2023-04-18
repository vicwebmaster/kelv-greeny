import React from 'react'
import { Link } from 'react-router-dom'
const ResetPass = () => {
  return (
    <>
     <section className="user-form-part">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
            <div className="user-form-logo">
              <Link to="/"><img src="./Assest/images/logo.png" alt="logo" /></Link>
            </div>
            <div className="user-form-card">
              <div className="user-form-title">
                <h2>worried?</h2>
                <p>No Problem! Just Follow The Simple Way</p>
              </div>
              <form className="user-form">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-button">
                  <button type="submit">get reset link</button>
                </div>
              </form>
            </div>
            <div className="user-form-remind">
              <p>Go Back To<Link to="/SignIn">login here</Link></p>
            </div>
            <div className="user-form-footer">
              <p>Greeny | &COPY; Copyright by <Link to="/">Mironcoder</Link></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ResetPass
