import React from 'react'
import './Trending.css'
import TrendingCard from '../trendingCard/TrendingCard'

const Trending = ({setCurrentPages, setCurrentEle}) => {
  return (
    <div className='TrendingSectionMainContainer'>
        <span>
          Trending Songs
        </span>
        <TrendingCard setCurrentEle = {setCurrentEle} setCurrentPages = {setCurrentPages}/>
    </div>
  )
}

export default Trending