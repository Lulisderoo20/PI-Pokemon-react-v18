const axios = require('axios');  //estas serian como tus dietas 
const { Type } = require('../db');

const getTypes = async (req, res) => {
    try{
        const urlTypes = await axios.get('https://pokeapi.co/api/v2/type');
        const allTypes = urlTypes.data.results;
        allTypes.forEach( e => {
            Type.findOrCreate({
                where: {
                    name: e.name, //solo tenemos name y id ;)
                },
            });
        });
        // console.log(allTypes);
        const dbTypes = await Type.findAll();//esta linea es importante
        // console.log(dbTypes);
        res.send(dbTypes);
    }catch(error){
        console.log(error);
    };
};

module.exports = {
    getTypes,
};




  