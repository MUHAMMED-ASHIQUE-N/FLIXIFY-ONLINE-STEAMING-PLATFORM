import React from 'react'
import Nvabar from '../Components/Navbar'
import Row from '../Components/Row'
import { actionMovies, crimeMovies, fantacyMovies, horrorMovies, mysteryMovies, scienceFiction, trillerMovies } from '../Url'

function Movies() {
  return (
    <div>
        <Nvabar/>
     <Row title="TrillerMovies" val='movie'  data={trillerMovies} />
     <Row title="ActionMovies" val='movie'  data={actionMovies} />
     <Row title="Crime Movies" val='movie'  data={crimeMovies} />
     <Row title="Fantacy Movies" val='movie'  data={fantacyMovies} />
     <Row title="Horror Movies" val='movie'  data={horrorMovies} />
     <Row title="Mystery Movies" val='movie'  data={mysteryMovies} />
     <Row title="Science Fiction" val='movie'  data={scienceFiction} />
    </div>
  )
}

export default Movies