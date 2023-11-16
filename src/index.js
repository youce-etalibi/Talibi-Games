import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom/client";
import styles from "./index.css";
import "./style.css";
// import styles from '.';

// TP2_JSX
// import App from './TP2_JSX/Components/App'
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

//  TP3_EX1

// import Greeting from "./TP3-props/Components/greeting";
// import Person from './TP3-props/Components/Person';
// import FriendList from "./TP3-props/Components/FriendsList";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// function App(){
//     const list = [
//         {name : 'Youssef', age:19},
//         {name : 'Moad', age:22},
//         {name : 'Ali', age:20}
//     ]
//     return(
//         <div>
//         <Greeting name='Youssef'/>
//         <Greeting name='Ali'/>
//         <Greeting name='Lokman'/>
//         <br/>
//         <Person name='Youssef' age='19'/>
//         <br/>
//         <FriendList FriendListNames={list}/>
//         </div>

//     )
// }
// root.render(<App/>);

//  TP3_EX2

// import Counter from './TP3-props/Counter'
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Counter />);

//  TP4

// import ListProduct from "./TP4/Components/ListProducts";
// function App() {
//   return (
//       <center>
//           <br/>
//     <main className="container" style={{backgroundColor:'yellowgreen', color:'white', borderRadius:'20px'}}>
//       <h1>Ordinateurs portables</h1>
//       <div className="row mb-2">
//         <ListProduct/>
//       </div>
//     </main>
//     </center>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);

//  TP5

// import Form from "./TP5/Components/Form";
// function App(){
//   return <Form/>
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);

  // TP6

// import Tp6 from './TP6/body';
// import ChercheBar from './TP6/ChercheBar'
// import ResultatSearch from './TP6/ResultatList';
// function App(){
//   return(
//     <div>
//       <Tp6/>
//       <br/><br/>
//       <center>
//       <div style={{backgroundColor:'red', width:'400px', padding:'30px', borderRadius:'20px'}}>
//         <h2 style={{color:'white', fontFamily:'verdana', fontWeight:'bold'}}>Composant App B</h2>
//       <ChercheBar/>
//       </div>
//       </center>
//       <br/><br/>
//     </div>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);

  // TP7

// import Coordonnee from './TP7_useEffect/cordonee';
// function App(){
// return (
// <div className="App">
// <Coordonnee/>
// </div>
// )}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);


  // Tp-logIn
// import Verification from './Tp_logIn/App';
// import Accueil from "./Tp_logIn/Accueil";
// function App(){
//   return(
//     <center>
//       <br/><br/>
//     <div>
//     <Verification/>
//   </div>
//     </center>
//     )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


//  TP8
    //  Test JS
// import Example from './TP8_API/Test';
//     function App(){
//       return(
//         <center>
//       <Example/>
//     </center>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>)

//  Exercice 1
  // Ex without api
// import AffichageEx1 from "./TP8_API/Exercice1";
//   function App(){
//     return(
//       <center>
//         <AffichageEx1/>
//       </center>
//     )
//   }
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<App/>)

  // ex with api

// import AffichageEx1 from "./TP8_API/Ex1_api";
//   function App(){
//     return(
//       <center>
//         <AffichageEx1/>
//       </center>
//     )
//   }
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<App/>)


//  Exercice 2
  // Ex without api
// import AffichageDetailUsers from "./TP8_API/Exercice2";
//   function App(){
//     return(
//       <center>
//         <AffichageDetailUsers/>
//       </center>
//     )
//   }
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<App/>)
  
  // ex with api
  // import AffichageDetailUsers from "./TP8_API/Ex2_api";
  //   function App(){
  //     return(
  //       <center>
  //         <AffichageDetailUsers/>
  //       </center>
  //     )
  //   }
  //   const root = ReactDOM.createRoot(document.getElementById('root'));
  //   root.render(<App/>)
  

//  Exercice3
// import AffichagePostUsers from "./TP8_API/Exercice3";
//   function App(){
//     return(
//       <center>
//         <AffichagePostUsers/>
//       </center>
//     )
//   }
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<App/>)



// Routage
// import App from './Routage/App';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);




//  tp - routage - listproduct
// import Chemin from "./Tp-Routage-Product/Chemin";
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Fragment><br/><Chemin/></Fragment>);


//  Project Post 
// import App from './Post-page-project/App';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<div style={{display:'flex', justifyContent:'center'}}><br/><App/></div>)


  // tp-routage-add-update-delete-stg
  
// import Accueil from "./Tp-Routage-useNavigate/Accueil";
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Fragment><br/><Accueil/></Fragment>);


  // --Tp CRUD 
// import Accueil from "./Tp-CRUD/Accueil";
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Fragment><br/><Accueil/></Fragment>);


  // FLAGS-GAME

  import Accueil from "./FLAGS-GAME/Accueil";

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <Fragment>
      <Accueil/>
      {/* <img src="./Flags/ad.svg"/> */}
    </Fragment>
  )
  
  
  