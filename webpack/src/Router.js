import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import NavBar from "./components/NavBar";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;
