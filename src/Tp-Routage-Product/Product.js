import React from "react";
import { Link } from "react-router-dom";
export default function Product(props){
    console.log(props.id)
    // const url = '/Detail/'+props.id+'/'+props.title+'/'+props.price+'/'+props.img;
    const url = `Detail/${props.id}`
  return (
    <div className="col">
      <div className="card shadow-sm">
        <Link to={url}>
            <img className="bd-placeholder-img card-img-top" src={`picturs_of_pc/${props.img}`} alt="img" style={{height:'150px', cursor:'pointer'}}/>
        </Link>
        <div className="card-body">
          <p className="card-title" style={{color:'green', fontFamily:'verdana', margin:'2px'}}>{props.title}</p>
          <p className="card-text" style={{color:'white', fontFamily:'verdana', fontWeight:"bold", backgroundColor:'green', borderRadius:'30px'}}>{props.price}</p>
          <div className="d-flex justify-content-between alignitems-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btnoutline-secondary" style={{backgroundColor:'green', color:'white'}}>
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
