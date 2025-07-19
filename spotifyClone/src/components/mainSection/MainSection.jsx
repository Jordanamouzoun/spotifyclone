import React from 'react'
import './MainSection.css'
import Tranding from '../trending/Trending'
import PopularArtists from '../popularArtists/PopularArtists'

const MainSection = () => {
  return (
    <main className='mainsection'>
        <Tranding/>
        <PopularArtists/>
    </main>
  )
}

export default MainSection