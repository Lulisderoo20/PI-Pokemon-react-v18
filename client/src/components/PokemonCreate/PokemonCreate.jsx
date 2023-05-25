import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { validate } from "./validator.js";
import { createPokemon, getTypes } from "../../redux/action";
import styles from "./PokemonCreate.module.css";


export default function PokemonCreate() {
  const dispatch = useDispatch();
  const typesData = useSelector((state) => state.types); // traer cosas del reducer
  const [types, setTypes] = useState([]);
  const [error, setError] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    image: "",
    types: [],
  }); //objeto igual a input
  const [input, setInput] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    image: "",
    types: [],
  });

  useEffect(() => {
    dispatch(getTypes());
 }, [dispatch]);

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (types.length > 2) {
      return alert("Choose only two types");
    }
    // if (!error && types.length) {
    //  alert('errorrr')
    // }
    if (!types.length) {
      alert("Select a Type");
    } else {
      
      dispatch(createPokemon(input));

      setInput({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        image: "",
        types: [],
      });

      setTypes([]);
      e.target.reset();
//if
      alert("Pokemon created!");
    }
  };

  const handleTypesChange = (e) => {
    if (e.target.checked) {
      setTypes([...types, e.target.value]);
      setInput({ ...input, types: [...types, e.target.value] });
    }

    
  };

  return (
    <div className={styles.body}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.nav}>
          <h1>Create Pokemon</h1>
          <button className={styles.button}>Create</button>
          <Link to="/home">
            <button className={styles.button}>Back</button>
          </Link>
        </div>

        <div className={styles.statsAndTypes}>
          <div className={styles.stats}>
            <h3>Stats</h3>

            <div className={styles.centralize}>
              <div className={styles.inputBlock}>
                <input
                  type="text"
                  name="name"
                  id="input-text"
                  required
                  spellCheck="false"
                  value={input.name}
                  onChange={handleInputChange}
                />

                {error.name && <p>{error.name}</p>}

                <span className={styles.placeholder}>Name</span>
              </div>
            </div>

            <div className={styles.centralize}>
              <div className={styles.inputBlock}>
                <input
                  type="number"
                  name="hp"
                  id="input-text"
                  required
                  spellCheck="false"
                  value={input.hp}
                  onChange={handleInputChange}
                />
                <span className={styles.placeholder}>Healt Points </span>
              </div>
            </div>

            <div className={styles.centralize}>
              <div className={styles.inputBlock}>
                <input
                  type="number"
                  name="attack"
                  id="input-text"
                  required
                  spellCheck="false"
                  value={input.attack}
                  onChange={handleInputChange}
                />
                <span className={styles.placeholder}>Attack</span>
              </div>
            </div>

            <div className={styles.centralize}>
              <div className={styles.inputBlock}>
                <input
                  type="number"
                  name="defense"
                  id="input-text"
                  required
                  spellCheck="false"
                  value={input.defense}
                  onChange={handleInputChange}
                />
                <span className={styles.placeholder}>Defense</span>
              </div>
            </div>

            <div className={styles.centralize}>
              <div className={styles.inputBlock}>
                <input
                  type="number"
                  name="speed"
                  id="input-text"
                  required
                  spellCheck="false"
                  value={input.speed}
                  onChange={handleInputChange}
                />
                <span className={styles.placeholder}>Speed</span>
              </div>
            </div>

            <div className={styles.centralize}>
              <div className={styles.inputBlock}>
                <input
                  type="number"
                  name="height"
                  id="input-text"
                  required
                  spellCheck="false"
                  value={input.height}
                  onChange={handleInputChange}
                />
                <span className={styles.placeholder}>Height</span>
              </div>
            </div>

            <div className={styles.centralize}>
              <div className={styles.inputBlock}>
                <input
                  type="number"
                  name="weight"
                  id="input-text"
                  required
                  spellCheck="false"
                  value={input.weight}
                  onChange={handleInputChange}
                />
                <span className={styles.placeholder}>Weight</span>
              </div>
            </div>

            <div className={styles.centralize}>
              <div className={styles.inputBlock}>
                <input
                  type="text"
                  name="image"
                  id="input-text"
                  required
                  spellCheck="false"
                  value={input.image}
                  onChange={handleInputChange}
                />
                {error.image && <p>{error.image}</p>}
                <span className={styles.placeholder}>Image Link: </span>
              </div>
            </div>
          </div>

          <div className={styles.types}>
            <h3>Types</h3>
            <div className={styles.typesOrder}>
              {typesData.map((e) => (
                <div className={styles.container}>
                  <ul className={styles.ksCboxtags}>
                    <li>
                      <input
                        onChange={handleTypesChange}
                        type="checkbox"
                        id={`checkbox${e.id}`}
                        value={e.name}
                      />
                      <label for={`checkbox${e.id}`}>{e.name}</label>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { validate } from "./validator.js";
// import { createPokemon } from "../../redux/action";
// import styles from "./PokemonCreate.module.css"

// export default function PokemonCreate(){
//     const dispatch = useDispatch();
//     const typesData = useSelector((state) => state.types);

//     const [error, setError] = useState([]);
//     const [input, setInput] = useState({
//         name: "",
//         hp: "",
//         attack: "",
//         defense: "",
//         speed: "",
//         height: "",
//         weight: "",
//         image: "",
//     });
//     const [types, setTypes] = useState([]);

//     const handleInputChange = (e) => {
//         setInput({
//             ...input,
//             [e.target.name]: e.target.value,
//         });

//         setError(
//             validate({
//                 ...input,
//                 [e.target.name]: e.target.value,
//             })
//         );
//     };

//     const handleTypesChange = (e) => {
//         if(e.target.checked){
//             setTypes([...types, e.target.value]);
//         }else{
//             let pos = types.indexOf(e.target.id);
//             types.splice(pos, 1);
//         };
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if(types.length > 2){
//             return alert('Choose only two types')
//         }
//         if (!error[0] && types.length) {
//             alert("Pokemon creatid!");
//             dispatch(createPokemon({ ...input, type: types }));
//             setInput({
//                 name: "",
//                 hp: "",
//                 attack: "",
//                 defense: "",
//                 speed: "",
//                 height: "",
//                 weight: "",
//                 image: "",
//             });
//             setTypes([]);
//             e.target.reset();
//             }else if(error[0] === undefined){
//                 alert('Select a Type');
//             }else{
//                 alert(error[0]);
//             }
//     };

//     return (
//         <div className={styles.body}>

//             <form onSubmit={(e) => handleSubmit(e)}>

//                 <div className={styles.nav}>
//                     <h1>Create Pokemon</h1>
//                     <button className={styles.button}>Create</button>
//                     <Link to='/home'>
//                         <button className={styles.button}>Back</button>
//                     </Link>
//                 </div>

//                 <div className={styles.statsAndTypes}>

//                     <div className={styles.stats}>
//                     <h3>Stats</h3>

//                     <div className={styles.centralize}>
//                         <div className={styles.inputBlock}>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 id="input-text"
//                                 required spellCheck="false"
//                                 value={input.name}
//                                 onChange={handleInputChange}
//                             />
//                             <span className={styles.placeholder}>Name</span>
//                         </div>
//                     </div>

//                     <div className={styles.centralize}>
//                         <div className={styles.inputBlock}>
//                             <input
//                                 type="number"
//                                 name="hp"
//                                 id="input-text"
//                                 required spellCheck="false"
//                                 value={input.hp}
//                                 onChange={handleInputChange}
//                             />
//                             <span className={styles.placeholder}>Healt Points </span>
//                         </div>
//                     </div>

//                     <div className={styles.centralize}>
//                         <div className={styles.inputBlock}>
//                             <input
//                                 type="number"
//                                 name="attack"
//                                 id="input-text"
//                                 required spellCheck="false"
//                                 value={input.attack}
//                                 onChange={handleInputChange}
//                             />
//                             <span className={styles.placeholder}>Attack</span>
//                         </div>
//                     </div>

//                     <div className={styles.centralize}>
//                         <div className={styles.inputBlock}>
//                             <input
//                                 type="number"
//                                 name="defense"
//                                 id="input-text"
//                                 required spellCheck="false"
//                                 value={input.defense}
//                                 onChange={handleInputChange}
//                             />
//                             <span className={styles.placeholder}>Defense</span>
//                         </div>
//                     </div>

//                     <div className={styles.centralize}>
//                         <div className={styles.inputBlock}>
//                             <input
//                                 type="number"
//                                 name="speed"
//                                 id="input-text"
//                                 required spellCheck="false"
//                                 value={input.speed}
//                                 onChange={handleInputChange}
//                             />
//                             <span className={styles.placeholder}>Speed</span>
//                         </div>
//                     </div>

//                     <div className={styles.centralize}>
//                         <div className={styles.inputBlock}>
//                             <input
//                                 type="number"
//                                 name="height"
//                                 id="input-text"
//                                 required spellCheck="false"
//                                 value={input.height}
//                                 onChange={handleInputChange}
//                             />
//                             <span className={styles.placeholder}>Height</span>
//                         </div>
//                     </div>

//                     <div className={styles.centralize}>
//                         <div className={styles.inputBlock}>
//                             <input
//                                 type="number"
//                                 name="weight"
//                                 id="input-text"
//                                 required spellCheck="false"
//                                 value={input.weight}
//                                 onChange={handleInputChange}
//                             />
//                             <span className={styles.placeholder}>Weight</span>
//                         </div>
//                     </div>

//                     <div className={styles.centralize}>
//                         <div className={styles.inputBlock}>
//                             <input
//                                 type="text"
//                                 name="image"
//                                 id="input-text"
//                                 required spellCheck="false"
//                                 value={input.image}
//                                 onChange={handleInputChange}
//                             />
//                             <span className={styles.placeholder}>Image Link: </span>
//                         </div>
//                     </div>

//                     </div>

//                     <div className={styles.types}>
//                         <h3>Types</h3>
//                         <div className={styles.typesOrder}>
//                         {
//                             typesData.map((e) => (
//                                 <div className={styles.container}>
//                                     <ul className= {styles.ksCboxtags}>
//                                         <li>
//                                             <input onChange={handleTypesChange} type="checkbox" id={`checkbox${e.id}`} value={e.name} />
//                                             <label for={`checkbox${e.id}`} >{e.name}</label>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             ))
//                         }
//                         </div>
//                     </div>
//             </div>
//             </form>

//         </div>
//     );
// };
