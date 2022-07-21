import React from 'react'
import './Header.css'
import CTA from './CTA'
// import self from '../../assets/me.jpg'
import {MdLocationOn} from 'react-icons/md'
const header = () => {
  return (
    <section id='header'>
    <header>
    <div className="container header__container">
      {/* <h5> Hello, I am</h5> */}
      <h1>Saketh Chamarthi</h1>
      <h3 className='text-light'> Computer Science Graduate</h3>
      
      <h5><MdLocationOn className='mapicon'> </MdLocationOn> Chicago</h5>
      <CTA></CTA>
      <div className="me">
      {/* <img src = {self} alt="me" /> */}
    </div>
    {/* <a href= "#contact" className='scroll__down'> Scroll down </a> */}
    </div>
     </header>
     </section>
  )
}

export default header