import { NavLink } from "react-router-dom";

const Card =(props)=>{
    return  <div className="col-md-4 col-10 mx-auto">
       <div className="card" >
         <img src={props.imgsrc} className="card-img-top" alt="..."/>
         <div className="card-body">
           <h5 className="card-title">{props.title}</h5>
           <p className="card-text">We provide trainings in {props.title}. </p>
           <NavLink to="/services" className="btn btn-primary">Enroll here</NavLink>
         </div>
       </div>
    </div>;
}

export default Card;