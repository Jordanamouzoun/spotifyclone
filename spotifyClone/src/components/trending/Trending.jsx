import React from 'react'
import './Trending.css'
import TrendingCard from '../trendingCard/TrendingCard'

const Trending = () => {
  return (
    <div className='TrendingSectionMainContainer'>
        <span>
          Trending Songs
        </span>
        <TrendingCard/>
    </div>
  )
}

export default Trending