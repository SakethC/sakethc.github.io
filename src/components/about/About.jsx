import React from 'react'
import './About.css'
import Me2 from '../../assets/me2.jpg' 
import {FaUniversity} from 'react-icons/fa'
const about = () => {
  return (
    <section id='about'>
      <h2 className='aboutme'> Hello!</h2>

      <div className=".container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me2} alt="About the Pic" />
          </div>
        </div>

        <div className="about__content">
          <div className='about__card'>
          <article className="about__cards">
            <FaUniversity className='about__icon'></FaUniversity>
            <h5> Masters in Computer Science</h5>
            <small>UNIVERSITY OF ILLINOIS CHICAGO </small>
          </article>

          <article className='about__cards'>
            <FaUniversity className='about__icon'></FaUniversity>
            <h5> <div>Bachelors of Technology,</div>Computer Science</h5>
            {/* <h5> Computer Science</h5> */}
            <small> SRM UNIVERSITY </small>
          </article>
          </div>
        <p>
        I am Saketh Chamarthi, a Computer Science graduate student from UIC. I am passionate about exploring latest customer oriented technolgy, working with new software and networking with enthusiastic individuals. On a holiday, you can find me laughing at memes, on the sportsfield or at the movies.  
        </p>

        {/* <a href="#contact" className='btn btn-primary'> Contact </a> */}
        </div>
      </div>
    </section>
  )
}

export default about