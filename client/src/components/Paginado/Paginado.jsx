import React from "react";
import style from "./Paginado.module.css"


export default function Paginado({ countriesPerPage, countries, paginado }){
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(countries/countriesPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav className={style.paginado}>
            <ul className={style.buttons}> 
                {pageNumbers && pageNumbers.map(number =>(
                   
                        <button className={style.button} onClick={() => paginado(number)}>{number}</button>
                    
                ))}
            </ul>
        </nav>
    )
}
