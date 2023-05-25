import axios from 'axios';

export function getPokemons(){
    return async function(dispatch){
    try {
        let response = await axios.get(`http://localhost:3003/pokemons`);
        // let arr= []; //tiene q estar en un array
        // arr.push(response.data)
        console.log(response.data);
        return dispatch({
            type: 'GET_POKEMONS',
            payload: response.data//response objeto {[]}, data []
        });
    } catch (error) {
        alert('No pude traer pokemons')
    }
     
    };
};

export function getTypes(){
    return async function(dispatch){
        let response = await axios.get(`http://localhost:3003/types`);
        return dispatch({
            type: 'GET_TYPES',
            payload: response.data
        });
    };
};



export function getNamePokemon(name){
    return async function(dispatch){
        try{
            let response = await axios.get(`http://localhost:3003/pokemons?name=${name}`);
            // console.log(response.data);
            let arr= []; //tiene q estar en un array
            arr.push(response.data)
            // console.log(arr)
            return dispatch({
                type: 'GET_BY_NAME',
                payload: arr 
            });
        }catch(error){
            // getPokemons();
            console.log('Pokemon Not Found');
            alert('Pokemon Not Found');
        };
    };
};

export function getDetail(id){
    return async function(dispatch){
        try{
            let json = await axios.get('http://localhost:3003/pokemons/' + id);
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


export function createPokemon(pokenuevo){
    return async function(dispatch){
        try {
            var response = await axios.post(`http://localhost:3003/pokemons`, pokenuevo);//pokenuevo seria el req.body de mi controller
            return console.log('pokemon created por redux')//dispatch({type: 'ADD_POKEMON', payload: response.data}); //en realidad no necesito este type porque mis pokemons se renderizan directamente desde mi base de datos.    
            //porq no m funciona este console.log()?
        } catch (error) {
            console.log(error.message);
            alert('no creo pokemon porq no quiero')
        }
       
    };
};


export function cleanMyStore(){
    return{
        type: 'CLEAN_STORE',
    }
}


export function setPage(){
    return{
        type: 'SET_PAGE',
    }
}
