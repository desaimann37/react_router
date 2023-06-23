import React from "react";
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes , Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./index.css";
import './server';
import Vans from "./pages/Vans";
import VanDetails from "./VanDetails";

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        <header>
            <Link className="site-logo" to="/">#VANLIFE</Link>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </nav>
        </header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans/>}/>
            <Route path="/vans/:id" element={<VanDetails/>} />
        </Routes>
    </BrowserRouter>

);