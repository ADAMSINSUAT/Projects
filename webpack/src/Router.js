import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./modules/NavBar";
import Contact from "./modules/Contact/container/Contact";
import About from "./modules/About";
import PopularPlayer from "./modules/PopularPlayer/container/PopularPlayer";
import Dashboard from "./modules/Dashboard/container/Dashboard";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/popularplayer" element={<PopularPlayer />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;
