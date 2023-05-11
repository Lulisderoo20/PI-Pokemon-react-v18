import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { cleanMyStore, cleanStore, getDetail } from "../../redux/action";
import image from "../../assets/pikachu-running.gif";
import styles from "./Detail.module.css";

export default function Detail() {
  const dispatch = useDispatch();
  const params = useParams();
  const [isCardDetailDos, setIsCardDetailDos] = useState(true);
  const [isCardDetailTres, setIsCardDetailTres] = useState(false);

  useEffect(() => {
    dispatch(getDetail(params.id));
  }, [dispatch, params.id]);

  const cleanStore = () => {
    dispatch(cleanMyStore());
  };

  const handleClick = () => {
    if (!isCardDetailDos && !isCardDetailTres) {
      setIsCardDetailDos(true);
    } else if (isCardDetailDos) {
      setIsCardDetailDos(false);
      setIsCardDetailTres(true);
    } else {
      setIsCardDetailTres(false);
    }
  };

  const pokemonDetail = useSelector(
    (state) => state.pokemonDetail.length && state.pokemonDetail[0]
  ); //operador logico/condicional AND , evaluacion de circuito corto

  if (pokemonDetail) {
    return (
      <div className={styles.bodyDetail}>
        <div className={styles.nav}>
          <Link to="/home">
            <button className={styles.button} onClick={cleanStore}>
              Back
            </button>
          </Link>
        </div>

        <div
          className={
            isCardDetailDos
              ? styles.original
              : isCardDetailTres
              ? styles.verde
              : styles.naranja
          }
        >
          <button className={styles.roundButton} onClick={handleClick}></button>
<div className={styles.centrar}>
          <div className={styles.imagePokemon}>
            <img
              src={pokemonDetail.image}
              alt="Pokemon Image"
              style={{ borderRadius: "10px", width: "250px", height: "250px" }}
            />
          </div>

          <h2 className={styles.name}>{pokemonDetail.name.toUpperCase()}</h2>
          <h4 className={styles.id}>ID: {pokemonDetail.id}</h4>
          <h4 className={styles.hp}>HP: {pokemonDetail.hp}</h4>
          <h4 className={styles.attack}>Attack: {pokemonDetail.attack}</h4>
          <h4 className={styles.defense}>Defense: {pokemonDetail.defense}</h4>
          <h4 className={styles.speed}>Speed: {pokemonDetail.speed}</h4>
          <h4 className={styles.height}>Height: {pokemonDetail.height}</h4>
          <h4 className={styles.weight}>Weight: {pokemonDetail.weight}</h4>

          <h3 className={styles.type}>Types:</h3>
          <div className={styles.types}>
            {pokemonDetail &&
              pokemonDetail.types.map((e) => (
                <h4 key={e.name}>
                  {e.name[0].toUpperCase() + e.name.slice(1)}
                </h4>
              ))}
          </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className={styles.nav}></div>
        <img
          src={image}
          className={styles.loadingPokemons}
          styles={{ width: "100px" }}
        />
        ;
      </div>
    );
  }
}
