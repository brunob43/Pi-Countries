import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postActivity, getCountries } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "../form/Form.module.css"


export default function ActivitiesCreate() {
  const dispatch = useDispatch()
  const history = useHistory()
  const countries = useSelector((state) => state.countries)


  const [formState, setFormState] = useState({
    name: '',
    dificult: '',
    duration: '',
    season: '',
    id: []
  })

  function handleChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  function handleChik(e) {
    if (e.target.checked) {
      setFormState({
        ...formState,
        season: e.target.value
      })
    }
  }

  function handleCheck(e) {
    if (e.target.checked) {
      setFormState({
        ...formState,
        dificult: e.target.value
      })
    }
  }

  function handleSelect(e) {
    if (!formState.id.includes(e.target.value))
      setFormState({
        ...formState,
        id: [...formState.id, e.target.value]
      })
  }

  function handleDelete(e) {
    console.log(e.target.id)
    setFormState({
      ...formState,
      id: formState.id.filter((value) => value != e.target.id)
    })
  }



  function handleSubmit(e) {

    e.preventDefault();
    if (formState.name && formState.dificult && formState.duration && formState.season && formState.id.length) {
      dispatch(postActivity(formState))
      alert("Actividad creada")
      setFormState({
        name: '',
        dificult: '',
        duration: '',
        season: '',
        id: []
      })
      history.push("/home")
    } else window.alert("faltan completar campos")
  }

    useEffect(() => {
      dispatch(getCountries())
    }, []);

    return (
      <div className={style.formcontainer}>
        <form className={style.form} onSubmit={(e) => {
          handleSubmit(e)
        }}>
          <Link to="/home"><button className={style.return}> {'<'} </button></Link>
          <h1 className={style.h1}>Crear Actividad</h1>

          <div>
            <span className={style.label} style={{ width: '400px' }}>Nombre</span>
            <input className={style.input} type="text" name="name" value={formState.name} onChange={handleChange} />
          </div>

          <div>
            <label className={style.label}>Duración</label>
            <input className={style.input} type="number" name="duration" value={formState.duration} onChange={handleChange} />
          </div>

          <div className={style.alinear}>
            <div className={style.formulario3}>
              <label className={style.label}>Temporada</label>
              <label className={style.formulario2}><input type="radio" name="Temporada" value="Primavera" onChange={(e) => handleChik(e)} />Primavera</label>
              <label className={style.formulario2}><input type="radio" name="Temporada" value="Otoño" onChange={(e) => handleChik(e)} />Otoño</label>
              <label className={style.formulario2}><input type="radio" name="Temporada" value="Verano" onChange={(e) => handleChik(e)} />Verano</label>
              <label className={style.formulario2}><input type="radio" name="Temporada" value="Invierno" onChange={(e) => handleChik(e)} />Invierno</label>
            </div>

            <div >
              <label className={style.label} >Dificultad</label>
              <label className={style.formulario}><input type="radio" name="Dificultad" value="1" onChange={(e) => handleCheck(e)} />1</label>
              <label className={style.formulario}><input type="radio" name="Dificultad" value="2" onChange={(e) => handleCheck(e)} />2</label>
              <label className={style.formulario}><input type="radio" name="Dificultad" value="3" onChange={(e) => handleCheck(e)} />3</label>
              <label className={style.formulario}><input type="radio" name="Dificultad" value="4" onChange={(e) => handleCheck(e)} />4</label>
              <label className={style.formulario}><input type="radio" name="Dificultad" value="5" onChange={(e) => handleCheck(e)} />5</label>
            </div>
          </div>

          <hr style={{ width: '94%' }} />

          {/* <div>
          <label className={style.label}>Países:</label>
          <input className={style.input} type="text" name="pais" value={formState.id} />
        </div> */}

          <select className={style.select} onChange={(e) => handleSelect(e)}>
            {countries.map((coun) => (
              <option value={coun.id}>{coun.name}</option>
            ))}
          </select>
          {/* <ul style={{ listStyleType: "none", marginLeft: "-50px" }}>Paises:<li style={{ width: "200px" }}>{formState.id.map(el => el + ",")}</li></ul> */}

          <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.682)',
            border: '1px solid rgba(93, 92, 92, 0.165)',
            width: '320px',
            height: '100px',
            marginBottom: '20px',
            overflowY: 'auto',
            padding: '6px',
            borderRadius: '5px'
          }}>
            {
              formState.id.map(el => (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'white',
                  margin: '10px',
                  color: 'black',
                  borderRadius: '5px',
                  paddingLeft: '10px',
                  fontWeight: '700',
                  transition: '0.2s'
                }}>
                  <span>{el}</span>
                  <span id={el} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '30px',
                    height: '30px',
                    color: 'white',
                    backgroundColor: '#e63946',
                    borderRadius: '20%',
                    paddingBottom: '4px',
                    margin: '3px',
                    transition: '0.2s',
                    cursor: 'pointer',
                    boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'
                  }}
                    onClick={handleDelete}
                  >x</span>
                </div>
              ))
            }
          </div>

          <div className={style.butons}>

            <button
              onClick={console.log}
              type="submit"

              className={style.button} style={{
                marginRight: "10px",

              }}>Crear actividad turística</button>
          </div>
        </form>
      </div>
    )
  }


