import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/home";
import Aboutus from "./pages/aboutus";
import Navbar from "./shared/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
      </Routes>
    </>
  );
}

export default App;
