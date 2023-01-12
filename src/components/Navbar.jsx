import { Link } from "react-router-dom";
import { MdMovieCreation } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";

const Navbar = () => {
  return (
      <nav id='navbar'>
        <h2>
          <Link to='/'><MdMovieCreation />Index Movies</Link>
        </h2>
        <form>
          <input type="text" placeholder="Busque por um filme" />
          <button type="submit"><BiSearchAlt/></button>
        </form>
      </nav>
  );
};

export default Navbar