import Card from "../Card/Card";
import style from "./CardsContainer.module.css"

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCountries, filterCountriesByContinent, orderByName, orderByPopulation} from "../../redux/actions";
import Paginado from "../Paginado/Paginado";


const CardsContainer = () => {
    let countries = useSelector((state) => state.countries);
    const [order, setOrder] = useState("")
    const [orderr, setOrderr] = useState("")
    const dispatch = useDispatch();
    const [currentPage, SetCurrentPage] = useState(1)
    const [countriesPerPage, SetCountriesPerPage] = useState(10, 99)
    const indexOfLastCountrie = currentPage * countriesPerPage // 9
    const indexOfFirstCountrie = indexOfLastCountrie - countriesPerPage // 0
    const currentCountries = countries.slice(indexOfFirstCountrie, indexOfLastCountrie)

    function handleSort(e){
        e.preventDefault();
       dispatch(orderByName(e.target.value))
       SetCurrentPage(1);
       setOrder(`Ordenado${e.target.value}`)
   }

   function handleSert(e){
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value))
    SetCurrentPage(1);
    setOrderr(`Ordenado${e.target.value}`)
   }

    const paginado = (pageNumber) => {
        SetCurrentPage(pageNumber)
    }


    useEffect(() => {
        dispatch(getCountries());

        return () => {
            console.log("aca se desmonta")
        }
    }, []);


    function handleClick(e) {
        e.preventDefault();
        dispatch(getCountries());
    }



    function handleFilterContinent(e) {
        e.preventDefault();
        dispatch(filterCountriesByContinent(e.target.value))
        console.log(e.target.value)
    }


//---> estilos para los botones de cargar paises, ascendente, poblacion asc, continente

    return (
        <div style={{
            paddingTop: "60px",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '50px'
                
            }}>
                <button
                    style={{
                        border: 'none',
                        marginRight: '5px',
                        padding: '10px 15px 10px 15px',
                        backgroundColor: 'grey',
                        borderRadius: '50px',
                        color: 'white',
                        textDecoration: 'none',
                        outline: 'none'
                        
                    }}
                    onClick={e => { handleClick(e) }}>
                    Volver a cargar todos los Paises
                </button>
                <div>
                    <select
                        onChange={e => handleSort(e)}
                        style={{
                            marginRight: '5px',
                            padding: '10px 15px 10px 15px',
                            backgroundColor: 'grey',
                            borderRadius: '50px',
                            color: 'white',
                            textDecoration: 'none',
                            outline: 'none',
                            cursor: 'pointer',
                            border: 'none'
                            
                        }}
                    >
                        <option  value={"asc"}>Ascendente</option>
                        <option  value={"desc"}>Descendente</option>
                    </select>

                    <select
                        onChange={e => handleSert(e)}
                        style={{
                            margin: '0px',
                            padding: '10px 15px 10px 15px',
                            backgroundColor: 'grey',
                            borderRadius: '50px',
                            color: 'white',
                            textDecoration: 'none',
                            outline: 'none',
                            cursor: 'pointer',
                            border: 'none'
                        }}
                    >
                        <option  value={"Popasc"}>Poblacion Ascendente</option>
                        <option  value={"Popdesc"}>Poblacion Descendente</option>
                    </select>

                    <select
                        onChange={e => handleFilterContinent(e)}
                        style={{
                            marginLeft: '5px',
                            padding: '10px 15px 10px 15px',
                            backgroundColor: 'grey',
                            borderRadius: '50px',
                            color: 'white',
                            textDecoration: 'none',
                            outline: 'none',
                            cursor: 'pointer',
                            border: 'none'
                        }}
                    >
                        <option value="Asia">ASIA</option>
                        <option value="Africa">AFRICA</option>
                        <option value="Antarctica">ANTÁRTIDA</option>
                        <option value="Europe">EUROPA</option>
                        <option value="Oceania">OCEANÍA</option>
                        <option value="North America">NORTH AMERICA</option>
                        <option value="South America">SOUTH AMERICA</option>
                    </select>

                  {/*   <select
                        style={{
                            marginLeft: '5px',
                            padding: '10px 15px 10px 15px',
                            backgroundColor: '#009cb9',
                            borderRadius: '5px',
                            color: 'white',
                            textDecoration: 'none',
                            outline: 'none',
                            cursor: 'pointer',
                            border: 'none'
                        }}
                    >
                        <option>Dificultad: 1</option>
                        <option value="2">Dificultad: 2</option>
                        <option value="3">Dificultad: 3</option>
                        <option value="4">Dificultad: 4</option>
                        <option value="5">Dificultad: 5</option>
                    </select> */}

                </div>
            </div>
            <Paginado
                countriesPerPage={countriesPerPage}
                countries={countries.length}
                paginado={paginado}
            />



            <div className={style.cardsContainer}>
                {
                    currentCountries.length ?
                        currentCountries?.map((country) => {
                            return (
                                <Card
                                    id={country.id}
                                    name={country.name}
                                    image={country.image}
                                    continent={country.continent}
                                />
                            )
                        }) :
                        "loading..."
                }
            </div>
        </div>
    )
}

export default CardsContainer;