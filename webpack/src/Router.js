import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./modules/Home";
import Contact from "./modules/Contact";
import About from "./modules/About";
import NavBar from "./modules/NavBar";
import Employee from "./modules/Employee/container/Employee";
import Register from "./modules/Register";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/employee" element={<Employee />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;
