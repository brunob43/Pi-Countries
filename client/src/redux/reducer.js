
import { CLEAN_COUNTRIES, GET_COUNTRIES, SET_COUNTRIES, FILTER_BY_VALUE, GET_NAME_COUNTRIE, POST_ACTIVITY, GET_DETAIL, ORDER_BYNAME, ORDER_POPULATION } from "./actions";

const inicialState = {
    countries: [],
    secondCountries: [],
    detail: {}
}

const rootReducer = (state = inicialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                secondCountries: action.payload
            }
        case CLEAN_COUNTRIES:
            return {
                ...state,
                countries: [],
            }
        case SET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case FILTER_BY_VALUE:
            const allCountries = state.secondCountries
            const continentFiltered = allCountries.filter((countrie) => {
                if (countrie.continent.includes(action.payload)) return countrie

            })
            return {
                ...state,
                countries: continentFiltered
            }
        case GET_NAME_COUNTRIE:
            return {
                ...state,
                countries: action.payload
            }
        case POST_ACTIVITY:
            return {
                ...state
            }
        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            }
        case ORDER_BYNAME:
            
            let sortArrr = action.payload === "asc"?
            state.countries.sort(function(a,b){
                if(a.name > b.name){
                    return 1;
                }
                if (b.name > a.name){
                    return -1;
                }
                return 0;
            }) : 
            state.countries.sort(function (a,b){
                if(a.name > b.name){
                    return -1;
                }
                if (b.name > a.name){
                    return 1;
                }
                return 0;
            })
            return {
                ...state,
                countries: sortArrr
            }
        case ORDER_POPULATION:
            console.log(action.payload)
            console.log(state.countries[0]);
            let sortArr = action.payload === "Popasc"?
            state.countries.sort(function(a,b){
                if(a.population > b.population){
                    return 1;
                }
                if (b.population > a.population){
                    return -1;
                }
                return 0;
            }) : 
            state.countries.sort(function (a,b){
                if(a.population > b.population){
                    return -1;
                }
                if (b.population > a.population){
                    return 1;
                }
                return 0;
            })
            return {
                ...state,
                countries: sortArr
            }
        default:
            return {
                ...state,
            }
    }
}

export default rootReducer;






/* const inicialState = {
    countries: [],
}

const rootReducer = (state = inicialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                secondCountries: action.payload
            }
        case CLEAN_COUNTRIES:
            return {
                ...state,
                countries: [],
            }
        case SET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case FILTER_BY_VALUE:
            const allCountries = state.secondCountries
            const continentFiltered = allCountries.filter((countrie) => {
                if (countrie.continent.includes(action.payload)) return countrie
            })
            return {
                ...state,
                countries: continentFiltered
            }
        case GET_NAME_COUNTRIE:
            return{
                ...state,
                countries: action.payload
            }
        
        default:
            return {
                ...state,
            }
    }
}

export default rootReducer; */


