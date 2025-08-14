import './App.css';
import { NavBar } from "./components/nav_bar";
import {Banner} from "./components/banner";

function App() {

  return (
    <div className='App'>
        <NavBar/> {/* Renderiza a barra de navegação */}
        
        <Banner/>


    </div>
  )
}

export default App
