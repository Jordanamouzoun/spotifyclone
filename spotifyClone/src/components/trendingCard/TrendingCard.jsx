import React from 'react'
import './TrendingCard.css'
import {TrendingCardData} from '../../config/config'

const TrendingCard = () => {
  
  return (
    <div className='TrendingCardSectionMainContainer'>
      {
        TrendingCardData.map((ele) => {
          return (
            <div className='CardContainer'>
              <img src={ele.imgSrc} alt="" />
              <div className="CardTextContainer">
                <h2>{ele.heading}</h2>
                <p>{ele.subHeading}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default TrendingCard