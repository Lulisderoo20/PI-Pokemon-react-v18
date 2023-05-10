import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ name, images, type, id }){
    return(
        <Link to={`/detail/${id}`} className={styles.card} style={{textDecoration: 'none'}}>
            <div >
                <h3 className={styles.name}>{name[0].toUpperCase() + name.slice(1)}</h3>
                <div className={styles.type}>
                {   type &&
                    type.map(e => (
                        <h5 key={e.name}>{e.name}</h5>
                    ))
                }
                </div>
                <img src={images} alt="Image not found" className={styles.img}/>
            </div>
        </Link>
    );
};