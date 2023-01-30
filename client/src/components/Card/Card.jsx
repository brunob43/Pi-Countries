import { NavLink } from "react-router-dom";
import style from "./Card.module.css"

const Card = ({name,image,continent,id}) =>{
    console.log(id)
    return(
        <NavLink to={`/Detail/${id}`} style={{textDecoration: "none", }}><div className={style.card}>
            <h4>{name}</h4>
            <img src={image} alt="Texto alternativo para la imagen" width="200" height="100"></img>
            <p>{continent}</p>
        </div>
        </NavLink>
    )
}

export default Card;