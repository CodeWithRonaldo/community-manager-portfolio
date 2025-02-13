import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./NavBar";
import Home from "./components/Home";
import About from "./components/About";
import MyPortfolio from "./components/MyPortfolio";
import WorkWithMe from "./components/WorkWithMe";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/my-portfolio" element={<MyPortfolio/>} />
          <Route path="/work-with-me" element={<WorkWithMe/>} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
      <Hero />
    </>
  );
}

export default App;
