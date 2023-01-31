import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TopBar from "./components/TopBar";
import Home from "./components/Home";

const App = () => {

    const [mode, setMode] = useState("Dark Mode");
    const updateMode = (data) => {
        setMode(data);
    }

    return (
        <BrowserRouter>
        <TopBar mode={mode} updateMode={updateMode} />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
