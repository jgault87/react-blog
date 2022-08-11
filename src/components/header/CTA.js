import React from 'react'
import CV from '../../assets/JJ-GAULT-resume.pdf'
import {RiFolderDownloadFill} from 'react-icons/ri'

const CTA = ({handlePageChange}) => {
  return (
    <div className="cta">
        <a href={CV} target="_blank" rel="noreferrer noopener" className="btn"> <RiFolderDownloadFill/> Resume</a>
        <a href="#contact" onClick={() => handlePageChange('Contact')} className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default CTA