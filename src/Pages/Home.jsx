import React from "react";
import Banner from "../Components/Banner";
import Row from "../Components/Row";
import { action, drama,  mysteryMovies, scienceFiction, trillerMovies } from "../Url";
import Nvabar from "../Components/Navbar";



function Home() {
  return (
    <div>
   <Nvabar/>
     <Banner/>
     <Row title="Originals" val='movie'  data={trillerMovies} />
     <Row title="Action" val='tv'  data={action} />
     <Row title="Mystery" val='movie'  data={mysteryMovies} />
     <Row title="Drama" val='tv'  data={drama} />
     <Row title="Science Fiction" val='movie'  data={scienceFiction} />
    </div>
  );
}

export default Home;
