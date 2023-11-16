import React from "react";
import {data} from './data'
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import "../App.css";
import "../App.css";
export default function App(){
    const home = useNavigate();
    return(
        <Fragment>
            <center>
            <div style={{backgroundColor:'black', color:'white', width:'800px', padding:'20px', borderRadius:'10px'}}>
            <center>
                <h1 style={{fontWeight:'bold'}}>LIST STAGAIRES</h1>
                <Link to='/add'>
                <button style={{width:'150px', margin:'center', color:'white', borderRadius:'10px', backgroundColor:'#61aefb', fontFamily:'verdana', fontWeight:'bold', padding:'5px', border:'2px solid white', marginTop:'4px'}}>Ajoute Stagaires</button>
                </Link>
            </center>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <table border='1' className="table table-bordered" style={{width:'700px', color:'white', fontFamily:'verdana', fontWeight:'bold', margin:'10px'}}>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>PROFIL</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>EMAIL</th>
                        <th colSpan='2'>EVENT</th>
                        </tr>
                    </thead>
                    <tbody>
                {data.map((item, index)=>(
                    
                    <tr className="table-row" key={item.id}>
                        <td>{item.id}</td>
                        <td>
                            <Link to={`detail/${item.id}/${item.name}/${item.email}/${item.age}/${item.image}/${item.password}`}>
                            <img style={{width:'80px',border:'2px solid black', height:'80px',borderRadius:'50%', objectFit:'cover'}} src={`Profiles/${item.image}`} alt="imgProfil"/>
                            </Link>
                        </td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.email}</td>
                        <td>
                            <Link to={`update/${item.id}/${item.name}/${item.email}/${item.age}/${item.image}/${item.password}`} >
                            <button style={{width:'150px', margin:'center', color:'white', borderRadius:'10px', backgroundColor:'greenyellow', fontFamily:'verdana', fontWeight:'bold', padding:'5px', border:'2px solid white'}}>Modifie</button>
                            </Link>
                            <button onClick={()=>{
                                window.confirm('Supprime le Stagaire')
                                const newData = data.filter((ei) => ei.id!=item.id);
                                                console.log(newData);
                                            data.length = 0;
                                            data.push(...newData);
                                        home('/')}}
                             style={{width:'150px', margin:'center', color:'white', borderRadius:'10px', backgroundColor:'red', fontFamily:'verdana', fontWeight:'bold', padding:'5px', border:'2px solid white', marginTop:'4px'}}>Supprime</button>
                        </td>
                    </tr>
                    ))}
                    </tbody>
                    </table>
            </div>
                    </div>
                    </center>
        </Fragment>
    )
}