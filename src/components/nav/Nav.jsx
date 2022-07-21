import React from 'react'
import './Nav.css'
import {HiHome} from 'react-icons/hi'
// import {BsPersonCircle} from 'react-icons/bs'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FaUniversity} from 'react-icons/fa'
import {BsFillLaptopFill} from 'react-icons/bs'
import {AiFillMail} from 'react-icons/ai'
import {RiUserSettingsFill} from 'react-icons/ri'
import { useState } from 'react'
const Nav = () => {
  const[activeNav, setActiveNav]= useState('#');
  return (
   <nav>
    <a href="#header"  onClick={()=>setActiveNav('#header')} className={activeNav==='#header' ? 'active':''}><HiHome></HiHome></a>
    {/* <a href="#about"><BsPersonCircle></BsPersonCircle></a> */}
    <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active':''}><FaUniversity></FaUniversity></a>
    <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active':''}><BsFillBriefcaseFill></BsFillBriefcaseFill></a>
    <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? 'active':''}><BsFillLaptopFill></BsFillLaptopFill></a>
    <a href="#skills" onClick={()=>setActiveNav('#skills')} className={activeNav==='#skills' ? 'active':''}><RiUserSettingsFill></RiUserSettingsFill></a>
    <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active':''}><AiFillMail></AiFillMail></a>


   </nav>
  )
}

export default Nav