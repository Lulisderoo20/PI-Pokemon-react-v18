const initialState = {
    pokemon : [],
    pokemonFiltered : [],
    pokemonDetail : [],
    types : [],
};

function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_POKEMONS':
            return {
                ...state,
                pokemon: action.payload,
                pokemonFiltered: action.payload,
            }
        case 'GET_BY_NAME':
            if(!action.payload.length){return alert('Pokemon not Found')}
            return {
                ...state,
                pokemon: action.payload,
            }
        case 'GET_TYPES':
            return {
                ...state,
                types: action.payload,
            }
        case 'GET_DETAIL':
            return {
                ...state,
                pokemonDetail: action.payload,
            }
            case 'FILTER_BY_TYPE':
                let allPokemonsType = state.pokemonFiltered;
                let typeFiltered = action.payload === 'all' ? allPokemonsType : allPokemonsType.filter((e) => {
                    return e.types.some((d) => d.name === action.payload)
                });
                return{
                    ...state,
                    pokemon: typeFiltered,
            }
        case 'FILTER_BY_STATE':
            let allPokemonsState = state.pokemonFiltered;
            let stateFiltered = action.payload === 'none' ? allPokemonsState : allPokemonsState.filter((e) => {
                return e.createInDb === action.payload
            });
            return {
                ...state,
                pokemon: stateFiltered
            }
        case 'ORDER_POKEMONS':
            if(action.payload === 'asc'){
            state.pokemon.sort(function(a, b){
                if(a.name > b.name){
                    return 1;
                }
                if(b.name > a.name){
                    return -1;
                }
                return 0;
            })
            }
            if(action.payload === 'des'){
                state.pokemon.sort(function(a, b){
                    if(a.name > b.name){
                        return -1;
                    }
                    if(b.name > a.name){
                        return 1;
                    }
                })
            }
            if(action.payload === 'weakness'){
                state.pokemon.sort(function(a, b){
                    if(a.attack  > b.attack ){
                        return 1;
                    }
                    if(b.attack  > a.attack ){
                        return -1;
                    }
                    return 0;
                })
            }
            if(action.payload === 'stronger'){
                state.pokemon.sort(function(a, b){
                    if(a.attack  > b.attack ){
                        return -1;
                    }
                    if(b.attack  > a.attack){
                        return 1;
                    }
                })
            }
            if(action.payload === 'none'){
            }
                return{
                    ...state,
                    pokemon: state.pokemon,
                }
            case 'CLEAN_STORE':
                return{
                    ...state,
                    pokemonDetail: [],
                }

            default:
            return state;
    };
};

export default rootReducer;