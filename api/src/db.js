//aca comente todo porq en el principio no sabia nada de que hacia cada cosa xD

require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

//---comente esto para render---
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon`,
  {
    //opciones de configuracion
    //logging -> console.log
    logging: false, // set to console.log to see the raw SQL queries para depuracion
    //native -> viene en false por defecto en realidad. preguntar si me conviene ponerlo en true y si hay que configurar algo mas para q funcione y no me rompa nada.
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

// const sequelize = new Sequelize(DB_DEPLOY, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });


const basename = path.basename(__filename); //path tiene metodos, basename devuelve el ultimo segmento de una ruta, filename devuelve toda la ruta. del directorio incluyendo el archivo a diferencia de __dirname que solo devuelve el directorio, (la ruta sin el archivo)

//esto tiene que definirse vacio.
const modelDefiners = [];

//  Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
// readdirSync lee los archivos dentro de una carpeta
// path.join(__dirname, '/models) .buena practica por si movemos el archivo
// file.indexOf(".") !== 0:  comprueba si el nombre del archivo tiene un "." en alguna posición que no sea la primera. para excluir archivos ocultos que comienzan con un punto, como archivos de configuración.
// file !== basename verifica q este archivo no se encuentre en la carpeta models
//file.slice(-3) === ".js" se queda solo c los archivos js
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

//ahora el array tiene los modelos cargados

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { Pokemon, Type } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
//relacion muchos a muchos, y definciion de tabla intermedia con nombre pokemons_type
Pokemon.belongsToMany(Type, {through: 'pokemons_type'});
Type.belongsToMany(Pokemon, {through: 'pokemons_type'});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
