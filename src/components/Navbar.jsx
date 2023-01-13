import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// styles
import { MdMovieCreation } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import styles from './Navbar.module.css';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!search) return
    navigate(`/search?q=${search}`);
    setSearch('');
    
  };


  return (
      <nav id={styles.navbar}>
        <h2>
          <Link to='/'><MdMovieCreation />Index <span>Movies</span></Link>
        </h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Busque por um filme..." onChange={(e) => setSearch(e.target.value)} value={search} />
          <button type="submit"><BiSearchAlt/></button>
        </form>
        <button>Dark mode</button>
      </nav>
  );
};

export default Navbar