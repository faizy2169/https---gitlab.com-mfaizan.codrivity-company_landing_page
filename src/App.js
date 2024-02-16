import './App.css';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import AllProjects from "./Component/AllProjects/AllProjects";
import Home from './Component/Home';
import { useEffect, useState } from 'react';
import { FaCaretUp } from "react-icons/fa";
function App() {
  const location = useLocation();
  const [showScroll, setScroll] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setScroll(true);
      }
      else {
        setScroll(false);
      }
    })
  }, [location])
  return (
    <div className="App">
      <div className={`upScroll ${showScroll && 'upScroll-show'}`} onClick={() => { window.scrollTo(0, 0) }}><FaCaretUp /></div>
      <div className='background-header'>
        <Navbar />
        <Header />
      </div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/OurProjects"} element={<AllProjects />} />
      </Routes>
    </div>
  );
}

export default App;
