import { ADD_FAVOURITE } from "./action-types"
import { DELETE_FAVOURITES } from "./action-types"

const initialState = {
    myFavorites: []
}

const reducer = (state = initialState, action)=> {
    switch(action.type){
        case ADD_FAVOURITE:
            return{
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }

        case DELETE_FAVOURITES:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char=> char.id !== action.payload)
            }


        default:
            return {...state}
    }
}

export default reducer