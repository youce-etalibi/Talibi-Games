import React, { Fragment } from "react";
import './FlagsGame.css'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import FlagOfName from "./FlagOfName";
import NameOfFlag from "./NameOfFlag";
import Home from "./Home";
import Score from "./Score";
export default function Accueil(){
    const flags = {flag : '🇩🇰'}
    return(
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
sss                 <Route path="/flagOfName" element={<FlagOfName/>}/>
sss                 <Route path="/NameOfFlag" element={<NameOfFlag/>}/>
sss                 <Route path="/:score" element={<Score/>}/>
                </Routes>
            </BrowserRouter>
        </Fragment>
    )}