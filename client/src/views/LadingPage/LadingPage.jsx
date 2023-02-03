import React from "react";
import { Link } from "react-router-dom";
import style from "./LadingPage.module.css";


const LandingPage = () => {
    return (
        
            <div className={style.text}/* className={style.header} */>
                <h1 className={style.titulo}>EarthApp</h1>
                <p>One app for all the countries</p>
                <Link to="/home">
                    <button className={style.button}>Explore me</button>
                </Link>
            </div>
        

    )
}

export default LandingPage;