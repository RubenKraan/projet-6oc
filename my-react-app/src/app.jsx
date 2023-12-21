import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataDone } from "./components/DataContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App = () => {
    let basename = "/";
    if (window.location.hostname === "RubenKraan.github.io") {
      basename = "/projet-6oc";
    }
    return (
        <BrowserRouter basename={basename}> 
            <DataDone>
                <Routes>
                </Routes>
            </DataDone> 
        </BrowserRouter>
    );
};