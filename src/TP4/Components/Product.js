import React from "react";
export default function Product(props){
  return (
    <div className="col" >
      <div className="card shadow-sm">
        <img className="bd-placeholder-img card-img-top" src={props.img} alt="img" style={{height:'150px'}}/>
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
