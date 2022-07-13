import React from 'react'
import CV from '../../assets/document.docx'

const CTA = ({handlePageChange}) => {
  return (
    <div className="cta">
        <a href={CV} download className="btn">Download CV </a>
        <a href="#contact" onClick={() => handlePageChange('Contact')} className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default CTA