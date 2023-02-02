import * as React from "react"
import './styles/Card.css';

const Card=props=>(
   <div className="pCard">
      <div className="Card">
         <img src={props.image}/>
         <h3>{props.title}</h3>
         <h4>S: {props.size}</h4>
      </div>
   </div>

)

export default Card