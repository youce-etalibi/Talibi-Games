import React, { Fragment } from "react";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./add";
import Update from "./update";
import Detail from "./detail";
export default function Accueil(){
    return(
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />}/>
                    <Route path='/add' element={<Add />}/>
                    <Route path='/update/:id/:name/:email/:age/:image/:password' element={<Update />}/>
                    <Route path='/detail/:id/:name/:email/:age/:image/:password' element={<Detail/>}/>
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}