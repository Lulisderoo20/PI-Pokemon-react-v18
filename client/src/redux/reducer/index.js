const initialState = {
  pokemon: [],
  pokemonFiltered: [],
  pokemonDetail: [],
  types: [],
  currentPage:1,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
// case "SET_PAGE":
//  return{
  
//  }


    case "GET_POKEMONS":
      return {
        ...state,
        pokemon: action.payload,
        pokemonFiltered: action.payload,
      };
      
    case "GET_BY_NAME":
      if (!action.payload.length) {
        console.log('Pokemon not Found');
        return alert("Pokemon not Found");
      }
      return {
        ...state,
        pokemon: action.payload,
      };
      

    case "GET_TYPES":
      return {
        ...state,
        types: action.payload,
      };
    case "GET_DETAIL":
      return {
        ...state,
        pokemonDetail: action.payload,
      };

    case "FILTER_BY_TYPE":

      let allPokemonsType = state.pokemonFiltered;
      let typeFiltered =
        action.payload === "all"
          ? allPokemonsType
          : allPokemonsType.filter((e) => {
              return e.types.some((d) => d.name === action.payload);//some() recorre los elementos del array y devuelve true si al menos un elemento cumple con la condición proporcionada en la función de callback. 
            });
      return {
        ...state,
        pokemon: typeFiltered,
        
      };

    case "FILTER_BY_STATE":
      let allPokemonsState = state.pokemonFiltered;
      let stateFiltered =
        action.payload === "none"
          ? allPokemonsState
          : allPokemonsState.filter((e) => {
              return e.createInDb === action.payload;
            });
      return {
        ...state,
        pokemon: stateFiltered,
       
      };
      
    case "ORDER_POKEMONS":
      if (action.payload === "asc") {
        state.pokemon.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        });
      }
      if (action.payload === "des") {
        state.pokemon.sort(function (a, b) {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
        });
      }
      if (action.payload === "weakness") {
        state.pokemon.sort(function (a, b) {
          if (a.attack > b.attack) {
            return 1;
          }
          if (b.attack > a.attack) {
            return -1;
          }
          return 0;
        });
      }
      if (action.payload === "stronger") {
        state.pokemon.sort(function (a, b) {
          if (a.attack > b.attack) {
            return -1;
          }
          if (b.attack > a.attack) {
            return 1;
          }
        });
      }
      if (action.payload === "none") {
      }
      return {
        ...state,
        pokemon: state.pokemon,
      };



    // case "ADD_POKEMON"://en realidad no necesito este type porque mis pokemons se renderizan directamente desde mi base de datos.    
    //   return {
    //     ...state,
    //     pokemon: [...state.pokemon, action.payload],
    //   };



    case "CLEAN_STORE":
      return {
        ...state,
        pokemonDetail: [],
      };

    default:
      return state;
  }
}

export default rootReducer;
