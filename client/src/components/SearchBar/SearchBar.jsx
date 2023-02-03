import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../../redux/actions";

export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handlerInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }


    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getCountriesByName(name))
    }

    return (
        <nav style={{ marginRight: '20px' }}>
            <input
                type="text"
                placeholder="Buscar..."
                onChange={(e) => handlerInputChange(e)}
                style={{
                    marginLeft: '20px',
                    padding: '10px 15px 10px 15px',
                    backgroundColor: '#00000094',
                    color: 'white',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    outline: 'none',
                    border: '1px solid rgba(255, 255, 255, 0.172)'
                }}
            />
            <button
                type="submit"
                onClick={(e) => handleSubmit(e)}
                style={{
                    marginLeft: '20px',
                    padding: '10px 15px 10px 15px',
                    backgroundColor: 'grey',
                    borderRadius: '50px',
                    color: 'white',
                    textDecoration: 'none'
                }}
            >Buscar</button>
        </nav>
    )
}