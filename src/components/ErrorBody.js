import React from 'react'
import { Link } from 'react-router-dom'
const ErrorBody = () => {
  return (
    <section class="error-part">
        <div class="container">
            <h1>404 | Not Found</h1><img class="img-fluid" src="./Assest/images/error.png" alt="error"/>
            <h3>ooopps! this page can't be found.</h3>
            <p>It looks like nothing was found at this location.</p><Link to="/Home">go to home</Link>
        </div>
    </section>
  )
}

export default ErrorBody
