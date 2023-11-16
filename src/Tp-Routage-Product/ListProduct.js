import React from "react";
import Product from "./Product";
export default function ListProduct(props){
   
    return(
            <center>
        <div style={{display:'flex', flexDirection:'row', gap:'10px', justifyContent:'center', alignItems:'center'}}>
            {props.products.map((item)=>(
                <div key={item.id} style={{width:'170px', height:'250px', boxShadow:'white 0px 0px 100px 10px'}}>
                    <Product id={item.id} title={item.title} price={item.price} img={`${item.thumbnail}`}/>
                </div>
            ))}
        </div>
            </center>
    )
}