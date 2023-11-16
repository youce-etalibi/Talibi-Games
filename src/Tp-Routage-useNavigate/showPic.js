import React from "react";
import { useParams } from "react-router-dom";
import { data } from "./data";
export default function ShowPic(){
    const id = useParams().id;
    const person = data.find((e)=>(e.id==id))
    console.log(person)
}