import './App.css'
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <h1>Index Movies</h1>
      <Outlet />
    </div>
  )
}

export default App
