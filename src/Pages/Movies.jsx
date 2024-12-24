import React from 'react'
import Nvabar from '../Components/Navbar'
import Row from '../Components/Row'
import { actionMovies, crimeMovies, fantacyMovies, horrorMovies, mysteryMovies, RomanceMovie, scienceFiction, trillerMovies } from '../Url'
import Footer from '../Components/Footer'

function Movies() {
  return (
    <div>
        <Nvabar/>
     <Row title="Triller" val='movie'  data={trillerMovies} />
     <Row title="Action" val='movie'  data={actionMovies} />
     <Row title="Crime" val='movie'  data={crimeMovies} />
     <Row title="Fantacy " val='movie'  data={fantacyMovies} />
     <Row title="Horror " val='movie'  data={horrorMovies} />
     <Row title="Mystery " val='movie'  data={mysteryMovies} />
     <Row title="Science " val='movie'  data={scienceFiction} />
     <Row title="Romance " val='movie'  data={RomanceMovie} />
     <footer className="md:hidden" ><Footer/></footer>
    </div>
  )
}

export default Movies