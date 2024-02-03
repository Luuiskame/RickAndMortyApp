import { ADD_FAVOURITE, DELETE_FAVOURITES, ORDER, FILTER, GETFAVORITES } from "./action-types"

let initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action)=> {
    switch(action.type){

        case GETFAVORITES: 
        return {
            ...state,
            myFavorites: action.payload,
        }

        case ADD_FAVOURITE:
            return{
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload,
            }

        case DELETE_FAVOURITES:
            return {
                ...state,
                myFavorites: action.payload
                // myFavorites: state.myFavorites.filter(char=> char.id !== action.payload)
            }

        case FILTER:
            const filteredFav = state.myFavorites.filter(char=> char.gender === action.payload)
            return{
                ...state,
                myFavorites: filteredFav

            }
        case ORDER:
            let charOrders
            if(action.payload === "upwards"){
                charOrders = state.myFavorites.sort((a,b)=> a.id > b.id ? 1 : -1)
            } else {
                charOrders = state.myFavorites.sort((a,b)=> b.id > a.id ? 1 : -1)
            }
            return{
                ...state,
                myFavorites: [...charOrders]
            }

        default:
            return {
                ...state,
            }
    }
}

export default reducer