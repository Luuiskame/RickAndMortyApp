import { ADD_FAVOURITE, DELETE_FAVOURITES, FILTER, ORDER, GETFAVORITES } from "./action-types";
import axios from 'axios'

   export const addFavourite = (character) => {
      
      try {
         const endpoint = 'http://localhost:3001/rickandmorty/fav'
         return async (dispatch)=>{
            const response = await axios.post(endpoint, character)
            const {data} = response
            return dispatch({
               type: ADD_FAVOURITE,
               payload: data
            })
         }
      } catch (error) {
         console.log(error)
      }
   
 };

export const deleteFavourite = (id) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id
      return async (dispatch)=>{
      const response = await axios.delete(endpoint)
      const {data} = response
      return dispatch({
         type: DELETE_FAVOURITES,
         payload: data
      })
   }
   } catch (error) {
      console.log(error) 
   }
};

export const filterCards = (gender)=>{
   return{
      type: FILTER,
      payload: gender
   }
}

export const orderCards = (a)=>{
   return{
      type: ORDER,
      payload: a
   }
}

export const getFavorites = ()=> async (dispatch)=>{
   try {
      const response = await axios('http://localhost:3001/rickandmorty/fav')
      const data = response.data
      console.log(data)

      dispatch({
         type: GETFAVORITES,
         payload: data,
      })
   } catch (error) {
      console.log(error)
   }
}