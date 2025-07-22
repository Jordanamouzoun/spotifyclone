import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footerMainContainer'>
        <div className="contentOnLeft">
          <h1>Preview of Spotify</h1>
          <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
        </div>
        <div className="cotentOnRight">
          <button>Sign up free</button>
        </div>
    </div>
  )
}

export default Footer
