import { ADD_FAVOURITE, DELETE_FAVOURITES } from "./action-types";
import axios from 'axios'

// export const addFavourite = (character)=>{
//     return {type: ADD_FAVOURITE, payload: character}
// }

export const addFavourite = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character)
       .then(({ data }) => {
          return dispatch({
             type: ADD_FAVOURITE,
             payload: data,
          });
       });
    };
 };

// export const deleteFavourite = (id)=>{
//     return {type: DELETE_FAVOURITES, payload: id}
// }

export const deleteFavourite = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: DELETE_FAVOURITES,
             payload: data,
       });
       });
    };
 };