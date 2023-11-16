import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import {data} from './data';
import { useNavigate } from "react-router-dom";
export default function Add(){
    const home = useNavigate();
    const [maxId, setMaxID] = useState(data.map((item)=>(item.id)).slice(-1).join('')-(-1))
    const [id, setId] = useState(maxId)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [password, setPassword] = useState('')
    const [image, setimage] = useState('')
    function handleSubmit(e){
        e.preventDefault();
        
        const element = {
            "id" : id,
            "name" : name,
            "email" : email,
            "age" : age,
            "password" : password,
            "image" : image
        }
        // console.log(element)
        data.push(element);
        home('/');
    }
    return(
        <Fragment>
            <center>
        <br/>
            <div style={{backgroundColor:'black', borderRadius:'10px', width:'550px', padding:'20px', color:'white', fontFamily:'verdana', fontWeight:'bold'}}>
                <h1 style={{color:'#61aefb', fontWeight:'bold', textAlign:'center'}}>Ajoute Stagaire</h1>
                    <form onSubmit={handleSubmit} style={{display:'flex', justifyContent:'center'}}>
                        <table className="table table-bordered" style={{width:'400px', backgroundColor:'white', color:'#61aefb', fontFamily:'verdana', fontWeight:'bold', padding:'20px', borderRadius:'10px', border:'2px solid black'}}>
                            <tbody>
                            <tr>
                                <td>NAME</td>
                                <td><input onChange={e=>setName(e.target.value)} type="text" style={{width:'90%', padding:'3px', backgroundColor:'#61aefb', color:'white', fontWeight:'bold', border:'3px solid white', outline:'none', borderRadius:'10px'}}/></td>
                            </tr>
                            <tr>
                                <td>EMAIL</td>
                                <td><input onChange={e=>setEmail(e.target.value)} type="text" style={{width:'90%', padding:'3px', backgroundColor:'#61aefb', color:'white', fontWeight:'bold', border:'3px solid white', outline:'none', borderRadius:'10px'}}/></td>
                            </tr>
                            <tr>
                                <td>AGE</td>
                                <td><input onChange={e=>setAge(e.target.value)} type="number" style={{width:'90%', padding:'3px', backgroundColor:'#61aefb', color:'white', fontWeight:'bold', border:'3px solid white', outline:'none', borderRadius:'10px'}}/></td>
                            </tr>
                            <tr>
                                <td>IMAGE</td>
                                <td><input onChange={e=>setimage(e.target.value)} type="text" style={{width:'90%', padding:'3px', backgroundColor:'#61aefb', color:'white', fontWeight:'bold', border:'3px solid white', outline:'none', borderRadius:'10px'}}/></td>
                            </tr>
                            <tr>
                                <td>PASSWORD</td>
                                <td><input onChange={e=>setPassword(e.target.value)} type="password" style={{width:'90%', padding:'3px', backgroundColor:'#61aefb', color:'white', fontWeight:'bold', border:'3px solid white', outline:'none', borderRadius:'10px'}}/></td>
                            </tr>
                            <tr>
                                <td colSpan='2'>
                                    <center>
                                    <button type="submit" style={{margin:'center', fontFamily:'verdana', fontWeight:'bold', width:'90%', backgroundColor:'#61aefb', color:'white', border:'2px solid white', borderRadius:'8px', padding:'10px'}}>Ajoute</button>
                                    </center>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                
            </div>
            </center>
        </Fragment>
    )
}