import React, { Fragment } from "react";
import { BrowserRouter, Route, useParams } from "react-router-dom";
import ListProduct from "./ListProduct";
export default function Detail(props) {
  console.log(props.products);
  const { id } = useParams();
  const item = props.products.find((e) => e.id == id);
  console.log(item);
  function GoBack(){
    // <Fragment>
    // <BrowserRouter>
    //   <Routes>
    //       <Route path="/" element={<ListProduct products={products}/>}>
    //   </Routes>
    // </BrowserRouter>
    // </Fragment>
    // // <ListProduct/>
  }
  return (
    <center>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "800px",
          backgroundColor: "green",
          padding: "0px",
          color: "white",
          borderRadius: "20px",}}>
        <div style={{width:'400px'}}>
          <img src={`/picturs_of_pc/${item.thumbnail}`} style={{width:'100%', margin:'none', borderRadius:'20px', padding:'7px'}}/>
        </div>
        <div className="Information" style={{ width: "400px", padding:'10px' }}>
          <span onClick={GoBack} style={{backgroundColor:'white', cursor:'pointer', color:'green', fontFamily:'verdana', fontWeight:'bold', border:'2px solid green', borderRadius:'50%', width:'40px', height:'10px', padding:'10px', position:'relative', left:'170px'}}>X</span>
          <br/>
          <h2 style={{textTransform:'uppercase', fontFamily:'verdana', fontWeight:'bold'}}>{item.title}</h2>
          <br/>
          <h1 style={{textTransform:'uppercase', fontFamily:'verdana', fontWeight:'bold', backgroundColor:'white', color:'green', borderRadius:'10px', boxShadow:'0 0 100px 10px white'}}>{item.price}</h1>
          <br/>
          <h4 style={{textAlign:'left', textDecoration:'underline'}}>Desciption :</h4>
          <p style={{textAlign:'left'}}>{item.desc}</p>
        </div>
      </div>
    </center>
  );
}
