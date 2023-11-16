import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './LogIn';
import Home from './Home';
export default function Accueil(){
    return(
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LogIn/>}/>
                    <Route path="/home" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}