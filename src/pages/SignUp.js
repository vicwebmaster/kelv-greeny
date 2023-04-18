
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
const SignUp = () => {
    const [fullname,fullnamechange]=useState("");
    const [email,emailchange]=useState("");
    const [password,passwordchange]=useState("");
    const [accounttype,accounttypechange]=useState("");
    const [country,countrychange]=useState("");
    const [phone,phonechange]=useState("");
    const [address,addresschange]=useState("");
    const navigate=useNavigate();
    const IsValidate=()=>{
        let IsProceed=true;
        let  errormessage='please enter the value in ';
        if(fullname===null || fullname === ''){
            IsProceed=false;
            errormessage += ' fullname';
        }
        if(phone===null || phone===''){
            IsProceed=false;
            errormessage += ' phone';
        }
        if(email===null || email===''){
            IsProceed=false;
            errormessage += ' email';
        }
        if(password===null || password===''){
            IsProceed=false;
            errormessage += ' password';
        }
        if (!IsProceed){
            toast.warning(errormessage)
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

            }else{
                IsProceed=false;
                toast.warning('please enter valid email')
            }
        }
        return IsProceed;
    }
    async function handlesubmit(e){
        if(IsValidate()){
          e.preventDefault();
          
          let Details={fullname:fullname,email:email,password:password,accounttype:accounttype,country:country,type:"register",phone:phone,address:address};
          //console.log(Details);
          try{
              let result= await fetch("http://localhost/jamaproject/api/v1/auth/auth.php",{
                  method:"POST",
                  headers:{
                    'content-type':'application/json',
                    'Accept':'application/json'
                },
                  body:JSON.stringify(Details)
              })
              
              const data=await result.json()
              console.warn("result",data)
              toast(data.message)
              // return data
              if(data.status===200){
                navigate('/SignIn')
                
              }
          }catch(err){
              toast (err.message)
          }
      }
    }
  return (
    <>
     <section className="user-form-part">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-10">
            <div className="user-form-logo">
              <Link to="/"><img src="./Assest/images/logo.png" alt="logo" /></Link>
            </div>
            <div className="user-form-card">
              <div className="user-form-title">
                <h2>Join Now!</h2>
                <p>Setup A New Account In A Minute</p>
              </div>
              <div className="user-form-group">
                <ul className="user-form-social">
                  <li>
                    <Link to="#" className="facebook"
                      ><i className="fab fa-facebook-f"></i>Join with facebook</Link>
                  </li>
                  <li>
                    <Link to="#" className="twitter"
                      ><i className="fab fa-twitter"></i>Join with twitter</Link>
                  </li>
                  <li>
                    <Link to="#" className="google"
                      ><i className="fab fa-google"></i>Join with google</Link>
                  </li>
                  <li>
                    <Link to="#" className="instagram"
                      ><i className="fab fa-instagram"></i>Join with instagram</Link>
                  </li>
                </ul>
                <div className="user-form-divider"><p>or</p></div>
                <form className="user-form" onSubmit={handlesubmit}>
                  <div className="form-group">
                    <input
                    value={fullname} onChange={e=>fullnamechange(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                    value={email} onChange={e=>emailchange(e.target.value)}
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                    value={phone} onChange={e=>phonechange(e.target.value)}
                      type="phone"
                      className="form-control"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="form-group">
                    <input
                    value={password} onChange={e=>passwordchange(e.target.value)}
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                    value={password} onChange={e=>passwordchange(e.target.value)}
                      type="password"
                      className="form-control"
                      placeholder="Enter repeat password"
                    />
                  </div>
                  <div className="form-group">
                    <select className="form-control" value={accounttype} onChange={e=>accounttypechange(e.target.value)}>
                        <option value="buyer">Buyer</option>
                        <option value="seller">Seller</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select className="form-control" value={country} onChange={e=>countrychange(e.target.value)}>
                        <option value="Ghana">Ghana</option>
                        <option value="Nigeria">Nigeria</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea value={address} onChange={e=>addresschange(e.target.value)} className='form-control' placeholder='Address'></textarea>
                  </div>
                  
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="check"
                    /><label className="form-check-label" for="check"
                      >Accept all the <Link to="#">Terms & Conditions</Link></label
                    >
                  </div>
                  <div className="form-button">
                    <button onClick={handlesubmit} type="submit">register</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="user-form-remind">
              <p>Already Have An Account?<Link to="/SignIn">login here</Link></p>
            </div>
            <div className="user-form-footer">
              <p>Greeny | &COPY; Copyright by <Link to="/">Mironcoder</Link></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default SignUp
