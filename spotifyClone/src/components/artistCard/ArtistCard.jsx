import React from 'react'
import './ArtistCard.css'
import {artistList} from '../../config/config'

const ArtistCard = ({setCurrentPages}) => {
  return (
    <div className='artistCardMainContainer'>
      {
        artistList.map((ele) => {
          return (
            <div onClick={() => {
              setCurrentPages("artistSpecificPage")
            }} className="artistCard">
              <img src={ele.imgSrc} alt=""/>
              <div className="artistTextContainer">
                <h1>{ele.heading}</h1>
                <p>Artist</p>
              </div>
                <span aria-hidden="true" class="e-91000-button__icon-wrapper">
                  <svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 24 24">
                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path>
                  </svg>
                </span>
            </div>
          )
        })
      }
    </div>
  )
}

export default ArtistCard