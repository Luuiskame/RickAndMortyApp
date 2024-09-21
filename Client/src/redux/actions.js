import { ADD_FAVOURITE, DELETE_FAVOURITES, FILTER, ORDER, GETFAVORITES, RESETFILTERS } from "./action-types";
import axios from 'axios'

const URL = process.env.NODE_ENV === "development" ? 'http://localhost:3001/rickandmorty/' : "https://rick-and-morty-app-blush-ten.vercel.app/rickandmorty/"

//    export const addFavourite = (character) => {
      
//       try {
//          return async (dispatch)=>{
//             const response = await axios.post(`${URL}fav`, character)
//             const {data} = response
//             return dispatch({
//                type: ADD_FAVOURITE,
//                payload: data
//             })
//          }
//       } catch (error) {
//          console.log(error)
//       }
   
//  };

// export const deleteFavourite = (id) => {
//    try {
//       return async (dispatch)=>{
//       const response = await axios.delete(`${URL}/fav/${id}`)
//       const {data} = response
//       return dispatch({
//          type: DELETE_FAVOURITES,
//          payload: data
//       })
//    }
//    } catch (error) {
//       console.log(error) 
//    }
// };

export const addFavourite = (character)=> {
   console.log(character)
   return {
     type: ADD_FAVOURITE,
     payload: character
   };
 }

 export const deleteFavourite = (id)=> {
   return {
     type: DELETE_FAVOURITES,
     payload: id
   };
 }

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
      const response = await axios(`${URL}fav`)
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

export const resetFilters = ()=>{
   return {
      type:RESETFILTERS,
   }
}