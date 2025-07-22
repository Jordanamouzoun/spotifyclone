import React from 'react'
import './PopularArtists.css'
import ArtistCard from '../artistCard/ArtistCard'

const PopularArtists = ({setCurrentPages}) => {
  return (
    <div className='PopularArtistSectionMainContainer TrendingSectionMainContainer'>
        <span>
          Popular artists
        </span>
        <ArtistCard setCurrentPages={setCurrentPages}/>
    </div>
  )
}

export default PopularArtists