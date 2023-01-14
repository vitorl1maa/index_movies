import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// styles
import { MdMovieCreation } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import {BsFillMoonFill, BsSunFill} from "react-icons/bs";
import styles from './Navbar.module.css';
import ReactSwitch from "react-switch";
import { ThemeContext } from "../App";
import { useContext } from "react";

const Navbar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!search) return
    navigate(`/search?q=${search}`);
    setSearch('');
    
  };
  

  // ThemeContext from App
  const {theme, toogleTheme} = useContext(ThemeContext)

  return (
      <nav id={styles.navbar}>
        <h2>
          <Link to='/'><MdMovieCreation /><span className={styles.brand}>Index <span className={styles.brand_theme}>Movies</span></span></Link>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.search_box}>
            <input 
             type="text" 
             placeholder="Busque por um filme..." 
             onChange={(e) => setSearch(e.target.value)} 
             value={search}
            />
            <button type="submit"><BiSearchAlt/></button>
          </div>
        </form>
        <div className="switch">
          <ThemeContext.Provider value={{theme, toogleTheme}}>
            <div>
              <ReactSwitch 
              onChange={toogleTheme} 
              checked={theme === 'dark'} 
              checkedIcon={false} 
              uncheckedIcon={false}
              checkedHandleIcon={<BsFillMoonFill/>}
              uncheckedHandleIcon={<BsSunFill/>}
              onColor='#42FF00'
            />
            </div>
          </ThemeContext.Provider>
        </div>
      </nav>  
  );
};

export default Navbar;