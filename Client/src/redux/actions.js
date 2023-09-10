import { ADD_FAVOURITE, DELETE_FAVOURITES } from "./action-types";

export const addFavourite = (character)=>{
    return {type: ADD_FAVOURITE, payload: character}
}

export const deleteFavourite = (id)=>{
    return {type: DELETE_FAVOURITES, payload: id}
}

