import React from 'react'
import { faDownload, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import movieIcon from "../assets/clapperboard.png"
import tvSeries from "../assets/drama.png"

import { Link } from 'react-router-dom'

function Footer() {


  return (
    <div className=' backdrop-blur-sm bg-[#1a1a1bd5] w-full  fixed bottom-0'>
        <div className='flex justify-around items-center py-5 text-white '>
      <Link to="/"> <FontAwesomeIcon icon={faHome}/> </Link>
      <Link to="/movies"> <img src={movieIcon} alt="" className='w-5' /> </Link>
      <Link to="/tvshows"> <img src={tvSeries} alt="" className='w-7'/></Link>
      <Link to="/">  <FontAwesomeIcon icon={faDownload}/>  </Link>
        </div>
    </div>
  )
}

export default Footer