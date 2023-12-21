import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataDone } from "./components/DataContext";

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