import React from "react";
import styles from "./Paginated.module.css";

export default function Paginated({ pokemonPerPage, allPokemons, paginated }){
    const pageNumbers = [];
    for(let i = 0; i < Math.ceil(allPokemons / pokemonPerPage); i++){
        pageNumbers.push(i + 1);
    };
    return (
        <div className={styles.paginatedBody}>
            {
                pageNumbers &&
                pageNumbers.map(e => (
                        <button onClick={() => paginated(e)} className={styles.pagination} key={e}>{e}</button>
                ))
            }
        </div>
    )
};