import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import CreateCrew from "./Components/CreateCrew";
import CrewmateGallery from "./Components/CrewmateGallery";
import Hero from "./Components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route  index={true} element={<Hero />} />
          <Route path="/CreateCrew" element={<CreateCrew />} />
          <Route path="/CrewmateGallery" element={<CrewmateGallery />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
