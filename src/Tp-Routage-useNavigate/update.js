import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import {data} from './data';
import { useNavigate, useParams } from "react-router-dom";
export default function Update(){
    const idparams = useParams().id;
    const nameparams = useParams().name;
    const emailparams = useParams().email;
    const ageparams = useParams().age;
    const imageparams = useParams().image;
    const passwordparams = useParams().password;
    const home = useNavigate();
    const [id, setId] = useState(idparams)
    const [name, setName] = useState(nameparams)
    const [email, setEmail] = useState(emailparams)
    const [age, setAge] = useState(ageparams)
    const [password, setPassword] = useState(passwordparams)
    const [image, setimage] = useState(imageparams)
    function handleSubmit(e) {
        e.preventDefault();
        const dataUpdated = data.map(item => {
            if (item.id == id) {
                return {
                    ...item, name, email, age, password, image,};
            } else {
                return item;
            }
        });

        data.length = 0;
        data.push(...dataUpdated);
        home('/');
    }
    return(
        <Fragment>
            <center>
        <br/>
            <div style={{backgroundColor:'black', borderRadius:'10px', width:'550px', padding:'20px', color:'white', fontFamily:'verdana', fontWeight:'bold'}}>
                <h1 style={{color:'#15ff00', fontWeight:'bold', textAlign:'center'}}>Modifie Stagaire</h1>
                    <form onSubmit={handleSubmit} style={{display:'flex', justifyContent:'center'}}>
                        <table className="table table-bordered" style={{width:'400px', backgroundColor:'white', color:'#15ff00', fontFamily:'verdana', fontWeight:'bold', padding:'20px', borderRadius:'10px', border:'2px solid black'}}>
                            <tbody>
                            <tr>
                                <td>NAME</td>
                                <td><input value={name} onChange={e=>setName(e.target.value)} type="text" style={{width:'90%', padding:'3px', backgroundColor:'#15ff00', color:'black', fontWeight:'bold', border:'3px solid white', outline:'none', borderRadius:'10px'}}/></td>
                            </tr>
                            <tr>
                                <td>EMAIL</td>
                                <td><input value={email} onChange={e=>setEmail(e.target.value)} type="text" style={{width:'90%', padding:'3px', backgroundColor:'#15ff00', color:'black', fontWeight:'bold', border:'3px solid white', outline:'none', borderRadius:'10px'}}/></td>
                            </tr>
                            <tr>
                                <td>AGE</td>
                                <td><input value={age} onChange={e=>setAge(e.target.value)} type="number" style={{width:'90%', padding:'3px', backgroundColor:'#15ff00', color:'black', fontWeight:'bold', border:'3px solid white', outline:'none', borderRadius:'10px'}}/></td>
                            </tr>
                            <tr>
                                <td>IMAGE</td>
                                <td><input value={image} onChange={e=>setimage(e.target.value)} type="text" style={{width:'90%', padding:'3px', backgroundColor:'#15ff00', color:'black', fontWeight:'bold', border:'3px solid white', outline:'none', borderRadius:'10px'}}/></td>
                            </tr>
                            <tr>
                                <td>PASSWORD</td>
                                <td><input value={password} onChange={e=>setPassword(e.target.value)} type="password" style={{width:'90%', padding:'3px', backgroundColor:'#15ff00', color:'black', fontWeight:'bold', border:'3px solid white', outline:'none', borderRadius:'10px'}}/></td>
                            </tr>
                            <tr>
                                <td colSpan='2'>
                                    <center>
                                    <button type="submit" style={{margin:'center', fontFamily:'verdana', fontWeight:'bold', width:'90%', backgroundColor:'#15ff00', color:'black', border:'2px solid white', borderRadius:'8px', padding:'10px'}}>Modifie</button>
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