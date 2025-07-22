import React, { useState } from 'react'
import './MainSection.css'
import Tranding from '../trending/Trending'
import PopularArtists from '../popularArtists/PopularArtists'
import SpecificMusicFile from '../../pages/SpecificMusicPage/SpecificMusicFile'

const MainSection = () => {
  const [currentPages, setCurrentPages] = useState("home")
  const [currentEle, setCurrentEle] = useState(null)
  return (
    <main className='mainsection'>
      {
        currentPages === "home" ?
        <>
          <Tranding setCurrentEle = {setCurrentEle} setCurrentPages = {setCurrentPages}/>
          <PopularArtists setCurrentPages = {setCurrentPages}/>
        </> : currentPages === "musicSpecificPage" ?
        <SpecificMusicFile currentEle = {currentEle} /> : currentPages === "artistSpecificPage" ?
        <>artist</> : null
      }
    </main>
  )
}

export default MainSection