import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import CreateCrew from "./Components/CreateCrew";
import CrewmateGallery from "./Components/CrewmateGallery";
import Hero from "./Components/Hero";



import CremateGalleryEmpty from "./Components/CremateGalleryEmpty";
import Details from "./Components/Details";
import UpdateCrew from "./Components/UpdateCrew";

function App() {
  

  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route  index={true} element={<Hero />} />
          <Route path="/CreateCrew" element={<CreateCrew />} />
          <Route path={"/CrewmateGalleryEmpty"} element={<CremateGalleryEmpty />} />
          <Route path={"/CrewmateGallery"} element={<CrewmateGallery />} />
          <Route path={"/CrewmateGallery/:id"} element={<Details />} />
          <Route path={"/UpdateCrewmate"} element={<UpdateCrew />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
