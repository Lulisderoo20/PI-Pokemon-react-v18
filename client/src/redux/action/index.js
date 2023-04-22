import axios from 'axios';

export function getPokemons(){
    return async function(dispatch){
        let json = await axios.get('https://pokemon-pi-henry.herokuapp.com/pokemons');
        return dispatch({
            type: 'GET_POKEMONS',
            payload: json.data
        });
    };
};

export function getTypes(){
    return async function(dispatch){
        let json = await axios.get('https://pokemon-pi-henry.herokuapp.com/types');
        return dispatch({
            type: 'GET_TYPES',
            payload: json.data
        });
    };
};

export function getNamePokemon(name){
    return async function(dispatch){
        try{
            let json = await axios.get('https://pokemon-pi-henry.herokuapp.com/pokemons?name=' + name);
            return dispatch({
                type: 'GET_BY_NAME',
                payload: json.data
            });
        }catch{
            console.log('Pokemon Not Found');
        };
    };
};

export function getDetail(id){
    return async function(dispatch){
        try{
            let json = await axios.get('https://pokemon-pi-henry.herokuapp.com/pokemons/' + id);
            return dispatch({
                type: 'GET_DETAIL',
                payload: json.data
            });
        }catch{
            console.log('Pokemon not found');
        };
    };
};

export function orderByName(payload){
    return{
        type: 'ORDER_POKEMONS',
        payload
    };
};

export function filterByType(payload){
    return{
        type: 'FILTER_BY_TYPE',
        payload
    };
};

export function filterByState(payload){
    return{
        type: 'FILTER_BY_STATE',
        payload
    };
};

export function createPokemon(payload){
    return async function(dispatch){
        await axios.post('https://pokemon-pi-henry.herokuapp.com/pokemons', payload);
    };
};

export function cleanMyStore(){
    return{
        type: 'CLEAN_STORE',
    }
}
