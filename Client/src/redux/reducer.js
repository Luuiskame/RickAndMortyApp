import {
  ADD_FAVOURITE,
  DELETE_FAVOURITES,
  ORDER,
  FILTER,
  GETFAVORITES,
  RESETFILTERS,
} from "./action-types";

let initialState = {
  myFavorites: [],
  allFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETFAVORITES:
      return {
        ...state,
        myFavorites: action.payload,
        allFavorites: action.payload,
      };

    case ADD_FAVOURITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allFavorites: [...state.allFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };

    // When deleting a favorite character by ID
    case DELETE_FAVOURITES:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
        allFavorites: state.allFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };
    case FILTER:
      const filteredFav = state.allFavorites.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorites: filteredFav,
      };
    case ORDER:
      let charOrders;
      if (action.payload === "upwards") {
        charOrders = state.allFavorites.sort((a, b) => (a.id > b.id ? 1 : -1));
      } else {
        charOrders = state.allFavorites.sort((a, b) => (b.id > a.id ? 1 : -1));
      }
      return {
        ...state,
        myFavorites: [...charOrders],
      };

    case RESETFILTERS:
      return {
        ...state,
        myFavorites: state.allFavorites,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
