import { Link, useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";
import pokemonImage from "../../assets/logo.png";
// import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons, getTypes } from "../../redux/action";
import { useEffect } from "react";
import yo from "../../assets/yo.png";

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
    <div>
    <div className={styles.Landing}>
      <img src={pokemonImage} alt="imagen" className={styles.Image} />
      {/* <Link to="/home"> */}
        <button className={styles.button} onClick={toHome}>Login</button>
      {/* </Link> */}
{/* <Link to="#about" className={styles.arrow}>⬇</Link> preguntar como se hace esto*/}

    {/* </div><div id="about" className={styles.about}>
      <img src={yo} alt="yo" className={yo}/>
      <div>Soy Lucia Lisdero. Formo parte de un grupo de Dise</div>
      </div> */}
   
      </div>
      </div>
  );
}

// usar useNavigate .
