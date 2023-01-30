import axios from 'axios';
export const CLEAN_COUNTRIES = "CLEAN_COUNTRIES";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const SET_COUNTRIES = "SET_COUNTRIES";
export const FILTER_BY_VALUE = "FILTER_BY_VALUE";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const GET_NAME_COUNTRIE = "GET_NAME_COUNTRIE";
export const POST_ACTIVITY = "POST_ACTIVITY"
export const GET_DETAIL = "GET_DETAIL"
export const ORDER_BYNAME = "ORDER_BYNAME"
export const ORDER_POPULATION = "ORDER_POPULATION"


export const getCountries = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/countries")
      .then(response => { return response.json() })
      .then(data => {
        dispatch({
          type: GET_COUNTRIES,
          payload: data,
        });
      }).catch((err) => console.log(err));
  };
};

export const cleanCountries = () => {
  return ({
    type: CLEAN_COUNTRIES,
  })
};

export const filterCountriesByContinent = (payload) => {
  return {
    type: FILTER_BY_VALUE,
    payload: payload
  }
}

export const getCountriesByName = (name) => {
  return function (dispatch) {
    fetch("http://localhost:3001/countries/?name=" + name)
      .then(response => { return response.json() })
      .then(data => {
        dispatch({
          type: GET_NAME_COUNTRIE,
          payload: data,
        });
      }).catch((err) => console.log(err));
  };
}

export function orderByName(payload){
  return {
    type:ORDER_BYNAME,
    payload
  }
}

export function orderByPopulation(payload){
  return {
    type: ORDER_POPULATION,
    payload
  }
}

export const setCountries = (value) => {
  return ({
    type: SET_COUNTRIES,
    payload: value,
  })
}


export function postActivity(payload) {
  return async function () {
    const response = await axios.post("http://localhost:3001/activities", payload)
    return response;
  }
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/countries/" + id);
      return dispatch({
        type: GET_DETAIL,
        payload: json.data
      })
    } catch (err) {
      console.log(err)
    }
  }
}



/* dispatch(getUsers()) */