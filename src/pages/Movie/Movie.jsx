import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  BsGraphUp, 
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
  BsFillCalendarDateFill
} from "react-icons/bs";
import {FaTheaterMasks} from 'react-icons/fa'
import styles from './Movie.module.css';

import MovieCard from '../../components/MovieCard';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async(url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  const formtCurrenty = (number) => {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`
    getMovie(movieURL)
  }, []);

  return (
    <div className={styles.container}>
      {movie && <>
        <div className={styles.movie_page}>
          <MovieCard movie={movie} showLink={false} />
          <p>{movie.tagline}</p>
        </div>
       
        <div className={styles.card_details}>
          <div className={styles.info}>
            <h3><FaTheaterMasks/>Género:</h3>
            {movie.genres.map((genere) => (
              <p key={genere.id}>{genere.name}</p>
            ))}
          </div>

          <div className={styles.info}>
            <h3><BsWallet2/> Orçamento:</h3>
            <p>{formtCurrenty(movie.budget)}</p>
          </div>

          <div className={styles.info}>
            <h3><BsGraphUp/> Receita:</h3>
            <p>{formtCurrenty(movie.revenue)}</p>
          </div>

          <div className={styles.info}>
            <h3><BsHourglassSplit/> Duração:</h3>
            <p>{movie.runtime} minutos </p>
          </div>

          <div className={styles.info}>
            <h3><BsFillFileEarmarkTextFill/>Sinopse:</h3>
            <p>{movie.overview}</p>
          </div>

          <div className={styles.info}>
            <h3><BsFillCalendarDateFill/>Data de Lançamento:</h3>
            <p>{movie.release_date}</p>
          </div>
        <Link to='/'>
          <button className={styles.btn_back}>Voltar</button>
        </Link>
        </div>
      </>}
    </div>
  )
}

export default Movie