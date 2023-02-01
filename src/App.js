import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TopBar from "./components/TopBar";
import Home from "./components/Home";
import SpecificCountry from "./components/SpecificCountry";

const App = () => {

    const [mode, setMode] = useState("Dark Mode");
    const updateMode = (data) => {
        setMode(data);
    }

    const [currentCountry, setCurrentCountry] = useState(undefined);
    const updateCountry = (country) => {
        setCurrentCountry(country);
    }

    return (
        <BrowserRouter>
        <TopBar mode={mode} updateMode={updateMode} />
            <Routes>
              <Route path="/" element={<Home updateCountry={updateCountry} />} />
              <Route path="/:country" element={<SpecificCountry country={currentCountry} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
