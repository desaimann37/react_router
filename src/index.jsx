import React from "react";
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes , Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./index.css"


ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        <header>
            <Link className="site-logo" to="/">#VANLIFE</Link>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>

);