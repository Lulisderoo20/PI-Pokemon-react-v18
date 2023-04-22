import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemon } from "../../redux/action/index";
import styles from "./SearchBar.module.css";

export default function SearchBar(){
    const dispatch = useDispatch();
    const [ name, setName ] = useState('');

    const hanldeInputChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if(name){
            dispatch(getNamePokemon(name));
        }else{
            alert('Enter a valid name');
        };
    };

    return (
        <div className={styles.centralize}>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <div className={styles.inputBlock}>
                <input
                type="text"
                name="input-text"
                id="input-text"
                required spellCheck="false"
                onChange={(e) => {hanldeInputChange(e)}}/>
                <span className={styles.placeholder}>Search</span>
            </div>
            </form>
        </div>
    )
};