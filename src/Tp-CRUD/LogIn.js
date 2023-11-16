import React, { Fragment, useState } from "react";
import './crud.css';
import { stg } from "./Data";
import { Link, useNavigate } from "react-router-dom";

export default function LogIn() {
    const [dataStg, setDataStg] = useState(stg);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msgError, setMsgError] = useState('');
    const [valid, setValid] = useState(false); 
    const [url, setUrl] = useState(''); 
    // const history = useHistory()
    const navigation = useNavigate()
    function handleSubmit(e) {
        e.preventDefault();
        // const emailCheck = dataStg.find(item => item.email === email); 
        // const passwordCheck = dataStg.find(item => item.password === password);
        // if (emailCheck.email == email && passwordCheck.password == password) {
        //     setValid(true);
        //     setUrl('/home'); 
        // } else {
        //     setValid(false);
        //     setUrl('/'); 
        // }
        // console.log(email, password, valid, emailCheck, passwordCheck, url);
        const person = stg.find((item)=>(item.email == email && item.password == password))
        if(person){
            // setUrl()
            navigation('/home')
        }else{
            setMsgError('ne pas existe');
            // setUrl('/')
            navigation('/')
        }
    }

    return (
        <Fragment>
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="formParent">
                    <form onSubmit={handleSubmit}>
                        <h3>LOG IN</h3>
                        <p>{setMsgError}</p>
                        <label htmlFor='email'>EMAIL</label><br /> 
                        <input onChange={e => setEmail(e.target.value)} type="text" id='email' /> <br />
                        <label htmlFor='password'>PASSWORD</label><br /> 
                        <input onChange={e => setPassword(e.target.value)} type="password" id='password' /><br />
                        {/* <Link to={url}> */}
                            <input type="submit" value='Connect' id='submit' /><br />
                        {/* </Link> */}
                    </form>
                </div>
            </div>
        </Fragment>
    );
}
