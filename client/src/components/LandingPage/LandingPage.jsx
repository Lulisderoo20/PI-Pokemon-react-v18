import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';
import pokemonImage from '../../assets/logo.png'

export default function(){
    return (
        <div className={styles.Landing}>
            <img src={pokemonImage} alt="imagen" className={styles.Image}/>
            <Link to = '/home'>
                <button className={styles.button}>Login</button>
            </Link>
        </div>
    );
};