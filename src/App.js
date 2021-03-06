import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import "./App.css";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Movies from "./Movies";

function App() {
  const location = useLocation();
  return (
    <div className="App bg-bg-light text-font-light dark:text-font-dark dark:bg-bg-dark min-h-screen">
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="movies" element={<Movies />} />
          </Route>
        </Routes>
      </AnimatePresence>

    </div>
  );
}

export default App;
