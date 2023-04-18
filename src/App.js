import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Quest from './pages/Quest';
import Offer from './pages/Offer';
import Profile from './pages/Profile';
import Wallet from './pages/Wallet';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Email from './pages/Email';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPass from './pages/ResetPass';
import ChangePass from './pages/ChangePass';
import { ToastContainer } from 'react-toastify';
import ProductInfo from './pages/ProductInfo';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <ToastContainer></ToastContainer>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
      </Route>
      <Route path="/Shop" element={<Layout/>}>
        <Route index element={<Shop/>}/>
      </Route>
      <Route path="/Quest" element={<Layout/>}>
        <Route index element={<Quest/>}/>
      </Route>
      <Route path='/Offer' element={<Layout/>}>
        <Route index element={<Offer/>}/>
      </Route>
      <Route path='/Profile' element={<Layout/>}>
        <Route index element={<Profile/>}/>
      </Route>
      <Route path='/Wallet' element={<Layout/>}>
        <Route index element={<Wallet/>}/>
      </Route>
      <Route path='/About' element={<Layout/>}>
        <Route index element={<About/>}/>
      </Route>
      <Route path='/Contact' element={<Layout/>}>
        <Route index element={<Contact/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}>
      </Route>
      <Route path='/Email' element={<Email/>}>
      </Route>
      <Route path='/SignIn'element={<SignIn/>}/>
      <Route path='/SignUp'element={<SignUp/>}/>
      <Route path='/ResetPass'element={<ResetPass/>}/>
      <Route path='/ChangePass' element={<ChangePass/>}/>
      <Route path='/ProductInfo' element={<Layout/>}>
        <Route index element={<ProductInfo/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
