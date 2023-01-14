import './App.css'
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import { createContext } from 'react';
import { useState } from 'react';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('dark');
  const toogleTheme = () => {
    setTheme((curr) => (curr === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{theme, toogleTheme}}>
      <div className="App" id={theme}>
       <Navbar />
       <Outlet/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
