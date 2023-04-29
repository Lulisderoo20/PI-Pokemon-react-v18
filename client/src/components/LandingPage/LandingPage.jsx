import { Link, useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";
import pokemonImage from "../../assets/logo.png";
// import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons, getTypes } from "../../redux/action";
import { useEffect } from "react";

export default function () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toHome=()=>{
navigate('/home')
  }

  useEffect(() => { //voy haciendo la peticion de los pokemonsapi y db y types(guardarlos en db)
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div className={styles.Landing}>
      <img src={pokemonImage} alt="imagen" className={styles.Image} />
      {/* <Link to="/home"> */}
        <button className={styles.button} onClick={toHome}>Login</button>
      {/* </Link> */}
    </div>
  );
}

// usar useNavigate .
