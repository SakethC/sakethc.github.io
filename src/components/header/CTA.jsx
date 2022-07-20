import React from 'react'
import resume from '../../assets/Resume.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={resume} download className='btn'>Resume</a>
        <a href = "#contact" className='btn'> Connect </a>
    </div>
  )
}

export default CTA