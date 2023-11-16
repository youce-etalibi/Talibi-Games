import React, { useState } from "react";

export default function Form() {
  const [msg, setMsg] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [dateN, setDateN] = useState('');
  const [ville, setVille] = useState('');
  const [genre, setGenre] = useState('');
  const [loisirs, setLoisirs] = useState([]); 
  const [Mme_Mr, setMme_Mr] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if(genre === 'Homme'){
      setMme_Mr('Mr');
    }else{
      setMme_Mr('Mme');
    }
    // (genre=='Homme'? setMme_Mr('Mr') : setMme_Mr('Mme'));
    setMsg(`Je suis ${Mme_Mr} ${name} ne le ${dateN} a ${ville} et de genre : ${genre}. Mes loisirs sont : ${loisirs.join(", ")}`);
  }

  return (
    <div>
        <center>
    <div style={{ display: 'flex', width:'600px', justifyContent:'center' }}>
      <form onSubmit={handleSubmit} style={{ width: '200px', margin: '30px', lineHeight:'10px', backgroundColor: 'rgb(105, 167, 221)', color: 'white', padding: '10px', borderRadius: '20px' }}>
        <h2>Inscription</h2>
        <div className="mb-3">
          <label htmlFor="identifiant" className="form-label">Name :</label>
          <input type="text" className="form-control" id="identifiant" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="motDePasse" className="form-label">Mot de passe :</label>
          <input type="password" className="form-control" id="motDePasse" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="dateNaissance" className="form-label">Date de naissance :</label>
          <input type="date" className="form-control" id="dateNaissance" onChange={(e) => setDateN(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="ville" className="form-label">Ville :</label>
          <select className="form-select" id="ville" onChange={(e) => setVille(e.target.value)}>
            <option value="Casablanca">Casablanca</option>
            <option value="Rabat">Rabat</option>
            <option value="Tangier">Tangier</option>
            <option value="Marrakech">Marrakech</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Genre :</label>
          <div className="form-check">
            <input type="radio" className="form-check-input" id="homme" name="genre" value="Homme" onChange={(e) => setGenre(e.target.value)} />
            <label className="form-check-label" htmlFor="homme">Homme</label>
          </div>
          <div className="form-check">
            <input type="radio" className="form-check-input" id="femme" name="genre" value="Femme" onChange={(e) => setGenre(e.target.value)} />
            <label className="form-check-label" htmlFor="femme">Femme</label>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Loisirs :</label>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="sport" name="loisirs" value="Sport" onChange={(e) => setLoisirs([...loisirs, e.target.value])} />
            <label className="form-check-label" htmlFor="sport">Sport</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="lecture" name="loisirs" value="Lecture" onChange={(e) => setLoisirs([...loisirs, e.target.value])} />
            <label className="form-check-label" htmlFor="lecture">Lecture</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="musique" name="loisirs" value="Musique" onChange={(e) => setLoisirs([...loisirs, e.target.value])} />
            <label className="form-check-label" htmlFor="musique">Musique</label>
          </div>
        </div>
        <button type="submit" className="btn btn-outline-primary" style={{ border: '2px solid white', color: 'white', width: '180px' }}>S'inscrire</button>
      </form>
      
      <div className="msg" style={{backgroundColor:'rgb(105, 167, 221)', width:'360px', height:'240px', lineHeight:'40px', padding:'15px', borderRadius:'20px', marginTop:'30px'}}>
        <p style={{ color: 'white', fontFamily:'verdana', fontWeight:'bold' }}> <span style={{fontSize:'25px', backgroundColor:'white', padding:'2px', borderRadius:'5px', textAlign:'center', paddingBottom:'8px', paddingTop:'-3px'}}>&#128231;</span> : {msg}</p>
      </div>
    </div>
    </center>
    </div>
  );
}
