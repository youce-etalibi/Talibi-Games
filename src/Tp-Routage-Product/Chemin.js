import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListProduct from "./ListProduct";
import Detail from "./Detail";
const products = [
    {
    id: 1,
    title: 'PC Portable Gamer HP VICTUS',
    price:'7490 DH',
    thumbnail : 'a1.jpeg',
    desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse tenetur alias nesciunt cupiditate amet quas suscipit soluta maxime minima rem doloremque dolorum exercitationem voluptate nemo ut, molestias animi non laboriosam.'
    },
    {
    id: 2,
    title: 'PC Portable Gamer HP VICTUS',
    price:'2190 DH',
    thumbnail : 'a2.jpeg',
    desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse tenetur alias nesciunt cupiditate amet quas suscipit soluta maxime minima rem doloremque dolorum exercitationem voluptate nemo ut, molestias animi non laboriosam.'
    },
    {
    id: 3,
    title: 'Pc Portable Chromebook Acer',
    price:'3640 DH',
    thumbnail: 'a3.jpeg',
    desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse tenetur alias nesciunt cupiditate amet quas suscipit soluta maxime minima rem doloremque dolorum exercitationem voluptate nemo ut, molestias animi non laboriosam.'
    },
    {
    id: 4,
    title: 'PC Portable - HUAWEI - xA2-Ak',
    price:'1270 DH',
    thumbnail: 'a4.jpeg',
desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse tenetur alias nesciunt cupiditate amet quas suscipit soluta maxime minima rem doloremque dolorum exercitationem voluptate nemo ut, molestias animi non laboriosam.'}];
    
export default function Chemin(){
    return(
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ListProduct products={products} />}/>
                    <Route path='/Detail/:id' element={<Detail products={products} />}/>
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}