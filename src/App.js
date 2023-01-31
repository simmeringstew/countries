import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Home from "./components/Home";

const App = () => {

    return (
        <BrowserRouter>
        <TopBar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
