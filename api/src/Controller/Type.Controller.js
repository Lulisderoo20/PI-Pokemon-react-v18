const axios = require('axios');
const { Type } = require('../db');

const getTypes = async (req, res) => {
    try{
        const urlTypes = await axios.get('https://pokeapi.co/api/v2/type');
        const allTypes = urlTypes.data.results;
        allTypes.forEach( e => {
            Type.findOrCreate({
                where: {
                    name: e.name,
                },
            });
        });
        const dbTypes = await Type.findAll();
        res.send(dbTypes);
    }catch(error){
        console.log(error);
    };
};

module.exports = {
    getTypes,
};