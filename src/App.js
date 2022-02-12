import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './Components/Navigation';
import About from './Pages/About';
import Music from './Pages/Music';
import Gallery from './Pages/Gallery';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Tour from './Pages/Tour';
import Footer from './Components/Footer'
import Guestbook from "./Pages/Guestbook";
import './Styles/App.scss';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/music" element={<Music />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/guestbook" element={<Guestbook />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
