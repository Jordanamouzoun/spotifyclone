import React from 'react'
import './Sidebar.css'
import Cards from './Cards'

const Sidebar = () => {
  const Textbc = ["Legal", "Safety & Privacy Center", "Privacy Policy", "Cookies", "About Ads", "Accessibility"]
  return (
    <div className='sidebarMainContentContainer'>
      <div className="sidebarTopContent">
        <h1>Your Library</h1>
        <p>+</p>
      </div>
      <div className="sidebarMidleContent">
        <Cards heading = "Creat Your First Playlist" subheading = "It's easy, we'll help you" buttontext = "Create playlist"/>
        <Cards heading = "Let's find some podcast to follow" subheading = "we'll keep you updated on new episodes" buttontext = "Browse podcasts"/>
      </div>
      <div className="sidebarBottomContent">
        <div className="sidebarBottomContentTopcontainer">
          {
            Textbc.map((ele) => {
              return (
                <p>{ele}</p>
              )
            })
          }
        </div>
        <div className="sidebarBottomContentBottomcontainer">
          <p>Cookies</p>
        </div>
        <div className="sidebarBottomContentBottomcontainer">
          <button>English</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar