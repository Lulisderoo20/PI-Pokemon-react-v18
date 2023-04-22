const { Router } = require('express');
const { getPokemons, createPokemon, getPokemonById } = require('../Controller/PokemonController');

const router = Router();

router.get('/pokemons', getPokemons);
router.get('/pokemons/:id', getPokemonById);
router.post('/pokemons', createPokemon);

module.exports = router;

