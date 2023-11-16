import React, { useState } from "react";
import { Data } from "./data";
import Accueil from './Accueil'

export default function Verification() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validation, setValidation] = useState(false);
  const [errorMsg, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    let isValid = false;

    for (let i = 0; i < Data.length; ++i) {
      if (Data[i].email === email && Data[i].password === password) {
        setName(Data[i].name);
        isValid = true;
        break;
      }
    }

    if (isValid) {
      setValidation(true);
      setError(''); 
    } else {
      setError('Email or password Not Correct.');
      setValidation(false);
    }
  }

  return (
    <div>
      <br />
      <br />
      {validation ? <Accueil name={name} /> : 
       <div style={{ color: 'blue', backgroundColor: 'InfoBackground', width: 'fit-content', padding: '30px', borderRadius: "25px", boxShadow: "10px 10px blue", border: '2px solid blue' }}>
       <h2 style={{ border: '2px solid blue', borderRadius: '15px', boxShadow: '-4px 4px blue' }}>Connexion</h2>
       <form onSubmit={handleSubmit}>
         Email: <br />
         <input type="text" onChange={(e) => setEmail(e.target.value)} style={{ backgroundColor: 'aliceblue', border: '2px solid blue', borderRadius: '10px', outline: '1px solid blue', color: 'blue' }} /> 
         <p style={{ color: 'white', backgroundColor:'red', borderRadius:'20px', paddingLeft:'4px', paddingRight:'4px', margin:'4px'}}>{errorMsg}</p>
         Password: <br />
         <input type="password" onChange={(e) => setPassword(e.target.value)} style={{ backgroundColor: 'aliceblue', border: '2px solid blue', borderRadius: '10px', outline: '1px solid blue', color: 'blue' }} /> <br />
         <p style={{ color: 'white', backgroundColor:'red', borderRadius:'20px', paddingLeft:'4px',  paddingRight:'4px', margin:'4px'}}>{errorMsg}</p><br />
         <input type="submit" value='Se connecter' style={{ backgroundColor: 'blue', border: '2px solid blue', borderRadius: '10px', color: 'white', width: '180px' }} />
       </form>
     </div>
      }
    </div>
  );
}
