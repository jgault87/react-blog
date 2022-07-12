import React from 'react'
import './modal.css'

const Modal = () => {
  return (
    <div id="project-modal" className="modal center">
    <div className="modal-content animate-zoom card-4">
      <header className="container teal">
        <span onClick={() => document.getElementById('project-modal').style.display='none'} 
        className="button display-topright">&times;</span>
        <h2 id="project-header">Modal Header</h2>
      </header>
        <div className="container large">
        <div className="container margin large">
          <p id="project-desc">Some text..</p>
          
        </div>
        <footer className="container teal">
          <p></p>
        </footer>
      </div>
    </div>
  </div>
  

  )
}

export default Modal