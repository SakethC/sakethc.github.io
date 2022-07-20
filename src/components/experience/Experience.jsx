import React from 'react'
import './Experience.css'
const experience = () => {
  return (
    <section id='experience'>
      <h2 className='exp'> Experience </h2>
      <div className="container_experience__container">
        <article className="intern">
          <h3> Salcit Technologies</h3>
          <small className='hide'> Feature Prioritization in Obstructive and Restrictive Lung Diseases</small>
          <h4> Data Scientist Intern</h4>

        </article>
        <article className="intern">
        <h3> Exaact Solutions </h3>
        <small className='hide'> Facial Recognition Application</small>
        <h4> Project Intern </h4>
  
        </article>
        <article className="intern">
        <h3> Moschip Semiconductors </h3>
        <small className='hide'> Dataset Augmentation and Neural Network Building</small>
        <h4> Machine Learning Intern</h4>
       
        </article>
        <article className="intern">
        <h3>Skyhigh Networks</h3>
        <small className='hide'> Sofwtare Testing and Tool building</small>
        <h4> Software Intern </h4>

    
        </article>
      </div>
    </section>
  )
}

export default experience