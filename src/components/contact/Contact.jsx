import React from 'react'
import './Contact.css'
import {MdEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'

const contact = () => {
  return (
    <section id='contact'>
      <h2 className='heading'>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            {/* <MdEmail/> */}
            {/* <h4> Email </h4> */}
            <a href="mailto:saketh.chamarti@gmail.com"><MdEmail color='white' > </MdEmail></a>
            <h5> saketh.chamarti@gmail.com</h5>
            
      
          </article>


          <article className='contact_option'>
            <BsFillTelephoneFill/>
            {/* <h4> Phone </h4> */}
            <h5> +1 7735806899</h5>
  
          </article>
        </div>
        </div>
    </section>
  )
}

export default contact