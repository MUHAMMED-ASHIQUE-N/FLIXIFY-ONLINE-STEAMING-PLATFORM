import React from 'react'
import Nvabar from '../Components/Navbar'
import Row from '../Components/Row'
import { action, crime, drama, family, mystery, triller } from '../Url'

function TvShows() {
  return (
    <div>
           <Nvabar/>
     <Row title="Triller" val='tv'  data={triller} />
     <Row title="Action" val='tv'  data={action} />
     <Row title="Crime" val='tv'  data={crime} />
     <Row title="Drama" val='tv'  data={drama} />
     <Row title="Family" val='tv'  data={family} />
     <Row title="Mystery" val='tv'  data={mystery} />
    </div>
  )
}

export default TvShows