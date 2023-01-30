import React from "react";
import { Link } from "react-router-dom";
import { getDetail } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Detail.module.css";
import style2 from "../../views/LadingPage/LadingPage.module.css";


export default function Detail(props) {
    console.log(props)
    const dispatch = useDispatch()

    const myDetail = useSelector((state) => state.detail)
    console.log(myDetail)


    useEffect(() => {
        dispatch(getDetail(props.match.params.id));
    }, [])



    return (
        <div className={style.formcontainer}>
            {
                <div className={style.detail}>
                    <h1 className={style.h1}>{myDetail.name}</h1>
                    <img src={myDetail.image} />
                    <h2>{myDetail.id}</h2>
                
                    <p className={style.label}>Continent : {myDetail.continent}</p>
                    <p className={style.label}>Capital: {myDetail.capital}</p>
                    <p className={style.label}>Subregion: {myDetail.subregion}</p>
                    <p className={style.label}>Area: {myDetail.area + " km2"}</p>
                    <p className={style.label}>Population: {myDetail.population + " people"}</p>
                    <p className={style.label}>Activities: {myDetail.activities ? myDetail.activities.map(el => el.name) + "" : ""}</p>
                    
                    <Link to="/home">
                        <button className={style2.button}>Volver</button>
                    </Link>
                </div>
            }
        </div>
    )
}
