import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import{toast} from 'react-toastify'
const SignIn = () => {
  const [email,emailchange]=useState("");
  const [password,passwordchange]=useState("");
  const navigate=useNavigate();
  async function ProceedLogin(e){
    e.preventDefault();
    if(validate()){
      //console.log('proceed')
     try{
      let item= {email:email,password:password,type:"login"}
      let result= await fetch("http://localhost/jamaproject/api/v1/auth/auth.php",{
        method:'POST',
        headers:{
          "Content-Type":"application/json",
          "Accept":'application/json'
        },
        body:JSON.stringify(item)
      })
     const data=await result.json();
     toast.success(data.message)
     if(data.status===200){
       localStorage.setItem("user-token",data.token)
      navigate('/')
      
    }
     }catch(err){
      toast.error (err.message)
  }
    }
  }
  const validate=()=>{
    let result=true;
    if(email ===''|| email=== null){
      result=false;
      toast.warning('please Enter valid email');
    }
    if(password ===''|| password=== null){
      result=false;
      toast.warning('please Enter valid password');
    }
    return result;
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
                <h2>welcome!</h2>
                <p>Use your credentials to access</p>
              </div>
              <div className="user-form-group">
                <ul className="user-form-social">
                  <li>
                    <Link to="#" className="facebook"
                      ><i className="fab fa-facebook-f"></i>login with facebook</Link>
                    
                  </li>
                  <li>
                    <Link to="#" className="twitter"
                      ><i className="fab fa-twitter"></i>login with twitter</Link>
                  </li>
                  <li>
                    <Link to="#" className="google"
                      ><i className="fab fa-google"></i>login with google</Link>
                  </li>
                  <li>
                    <Link to="#" className="instagram"
                      ><i className="fab fa-instagram"></i>login with instagram</Link>
                  </li>
                </ul>
                <div className="user-form-divider"><p>or</p></div>
                <form className="user-form" onSubmit={ProceedLogin}>
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
                      value={password} onChange={e=>passwordchange(e.target.value)}
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="check"
                    /><label className="form-check-label" for="check"
                      >Remember Me</label
                    >
                  </div>
                  <div className="form-button">
                    <button onClick={ProceedLogin} type="submit">login</button>
                    <p>
                      Forgot your password?<Link to="/ResetPass"
                        >reset here</Link>
                      
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div className="user-form-remind">
              <p>
                Don't have any account?<Link to="/SignUp">register here</Link>
              </p>
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

export default SignIn
